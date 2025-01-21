import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";
import _ from "lodash";
import path from "path";
import fs from "fs";

import {
  Exams,
  Subjects,
  SubjectToSyllabusMapping,
  GSToSubjectsMapping,
} from "./syllabusDatabase";
import {
  predictSubjectsPromptTemplate,
  filterSubjectSpecificCriteria,
  getEvaluateAnswerPrompt,
  feedbackPromptTemplate,
} from "./promptTemplates";
import { model } from "./model";
import {
  predictSubjectsOutputFormat,
  evaluationCriteriaSchema,
  evaluationResponse,
} from "./schema";
import {
  baseParameters,
  excellenceParameters,
  subjectParameters,
} from "./criteriaDatabase";
import { HumanMessage } from "@langchain/core/messages";

/**
 * Type Definitions
 */
type EvaluationResult = {
  parameter: string;
  logic: string[];
  marks: number;
}[];

/**
 * Predicts subjects for the given question.
 */
async function predictSubjects(
  question: string,
  exam: Exams
): Promise<{ reasons: string; subjects: Subjects[] }> {
  const prompt = ChatPromptTemplate.fromTemplate(predictSubjectsPromptTemplate);
  const outputParser = StructuredOutputParser.fromZodSchema(
    predictSubjectsOutputFormat
  );
  const chain = prompt.pipe(model).pipe(outputParser);

  const paperSubjects = GSToSubjectsMapping[exam].subjects;
  const paperSyllabus = paperSubjects.reduce(
    (syllabus, subject) => ({
      ...syllabus,
      [subject]: SubjectToSyllabusMapping[subject],
    }),
    {} as Record<Subjects, string[]>
  );

  const result = await chain.invoke({
    output_format: outputParser.getFormatInstructions(),
    question,
    available_subjects: paperSubjects,
    available_subjects_syllabus: paperSyllabus,
  });

  return {
    reasons: result.reasonsWhySubjectsArePicked,
    subjects: result.subjectsRelatedToQuestion,
  };
}

/**
 * Generates evaluation criteria for the given subjects.
 */
async function generateEvaluationCriteria(
  question: string,
  subjects: Subjects[],
  marks: number
): Promise<EvaluationResult> {
  const prompt = ChatPromptTemplate.fromTemplate(filterSubjectSpecificCriteria);
  const outputParser = StructuredOutputParser.fromZodSchema(
    evaluationCriteriaSchema
  );
  const chain = prompt.pipe(model).pipe(outputParser);

  return chain.invoke({
    criterias: _.flatten(
      subjects.map((subject) => subjectParameters[subject].criteria)
    ),
    marks_available: 0.5 * marks,
    output_format: outputParser.getFormatInstructions(),
    question,
  });
}

/**
 * Calculates marks distribution for base and excellence parameters.
 */
function calculateBaseAndExcellenceCriteria(marks: number): {
  base: EvaluationResult;
  excellence: EvaluationResult;
} {
  const distributeMarks = (totalMarks: number, criteria: any[]) =>
    criteria.map((criterion) => ({
      parameter: criterion.parameter,
      logic: criterion.logic,
      marks: totalMarks / criteria.length,
    }));

  return {
    base: distributeMarks(marks * 0.25, baseParameters.criteria),
    excellence: distributeMarks(marks * 0.1, excellenceParameters),
  };
}

/**
 * Consolidates all criteria into a single list.
 */
function consolidateCriteria(
  baseCriteria: EvaluationResult,
  excellenceCriteria: EvaluationResult,
  subjectSpecificCriteria: EvaluationResult
): EvaluationResult {
  return _.flatten([baseCriteria, excellenceCriteria, subjectSpecificCriteria]);
}

/**
 * Determines word limit based on marks.
 */
function getWordLimit(marks: 10 | 15 | 20): number {
  const limits = { 10: 150, 15: 250, 20: 300 };
  return limits[marks];
}

/**
 * Converts an image file to a Base64 string and calculates its size.
 */
function imageToBase64WithSize(filePath: string): {
  base64: string;
  sizeMB: number;
} {
  const fileBuffer = fs.readFileSync(filePath);
  const base64 = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
  const sizeMB = Buffer.byteLength(base64, "utf8") / (1024 * 1024);
  console.log(`Image: ${filePath}, Size: ${sizeMB.toFixed(2)} MB`);
  return { base64, sizeMB };
}

/**
 * Main function to evaluate the answer.
 */
export const evaluateAnswer = async (
  question: string,
  exam: Exams,
  marks: 10 | 15 | 20
) => {
  try {
    // Step 1: Predict Subjects
    const { reasons, subjects } = await predictSubjects(question, exam);
    console.log("Subjects related to question:", subjects);
    console.log("Reasons for picking subjects:", reasons);

    // Step 2: Generate Subject-Specific Criteria
    const subjectSpecificCriteria = await generateEvaluationCriteria(
      question,
      subjects,
      marks
    );

    // Step 3: Calculate Base and Excellence Criteria
    const { base, excellence } = calculateBaseAndExcellenceCriteria(marks);

    // Step 4: Consolidate All Criteria
    const consolidatedCriteria = consolidateCriteria(
      base,
      excellence,
      subjectSpecificCriteria
    );

    // Step 5: Prepare and Evaluate Answer
    const images = ["answerone.jpg", "answertwo.jpg", "answerthree.jpg"].map(
      (file) => imageToBase64WithSize(path.join(__dirname, file))
    );

    const outputParser =
      StructuredOutputParser.fromZodSchema(evaluationResponse);
    const message = new HumanMessage({
      content: [
        ...images.map((img) => ({ type: "image_url", image_url: img.base64 })),
        {
          type: "text",
          text: getEvaluateAnswerPrompt({
            answer_word_limit: getWordLimit(marks),
            evaluation_parameters: JSON.stringify(consolidatedCriteria),
            question,
            output_format: outputParser.getFormatInstructions(),
          }),
        },
      ],
    });

    const evaluation = await model.invoke([message]);

    return evaluation.content

   
  } catch (error) {
    console.error("Error evaluating answer:", error);
    throw error;
  }
};

// Example Usage
evaluateAnswer(
  "What is IBCA and NTCA? What is the role of NGO'S in tiger preservation in INDIA?",
  Exams.GS3,
  15
).then((result) => console.log("Final Evaluation Result:", result));
