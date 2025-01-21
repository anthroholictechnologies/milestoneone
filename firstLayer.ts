import { PromptTemplate } from "@langchain/core/prompts";
import { Exams, Subjects, SubjectToSyllabusMapping, GSToSubjectsMapping } from "./evaluation/syllabusDatabase";
import z from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: "AIzaSyDgRxvz1qOVKRVKzDnGtURs77RloUn5-tI",
  topP: 1,
});

const schema = z.object({
  subjects: z
    .array(z.nativeEnum(Subjects).describe("Enum value representing a subject"))
    .describe("Array of subjects from the Subjects enum"),
  reason: z
    .string()
    .describe(
      "Why these subjects are relavent to the question? Give reference from the syllabus"
    ),
});

export async function predictSubjects(question: string, exam: Exams) {
  const paperSubjects = GSToSubjectsMapping[exam].subjects;
  const paperSyllabus = paperSubjects.reduce((syllabus, subject) => {
    syllabus[subject] = SubjectToSyllabusMapping[subject];
    return syllabus;
  }, {} as Record<Subjects, string[]>);

  const promptTemplate = `
You are an expert in categorizing questions based on the UPSC syllabus. Your task is to determine the most relevant subjects for the given question, ensuring that only subjects directly related to the content of the question are chosen.
Follow these guidelines:
1. Minimize the number of subjects selected — only choose the subject if the question is clearly and directly related to that subject's syllabus. Avoid adding multiple subjects unless absolutely necessary.
2. Avoid keyword-based selection — do not choose a subject simply because certain words appear in the question. Focus on context and depth of relevance to the subject.
3. If a question involves multiple aspects, select the subject that most strongly aligns with the primary theme of the question. The chosen subject must represent the core focus of the question.
4. Reject marginal connections — if the relevance to a subject is only peripheral or superficial, do not include that subject. For example, if the question mentions a general topic like "urban development" but is primarily about "Indian architecture," then "Geography" should not be selected.
5. Ensure that the subject is included in the syllabus — do not select a subject unless it is explicitly mentioned in the provided syllabus.
The question is: {question}
The syllabus for available subjects is: {upsc_syllabus}
The available subjects are: {subjects}
Provide your output in the following format:
{outputFormat}`;

  const prompt = PromptTemplate.fromTemplate(promptTemplate);

  const outputParser = StructuredOutputParser.fromZodSchema(schema);

  const formatInstructions = outputParser.getFormatInstructions();

  const chain = prompt.pipe(model).pipe(outputParser);

  const result = await chain.invoke({
    outputFormat: formatInstructions,
    question: question,
    upsc_syllabus: paperSyllabus,
    subjects: GSToSubjectsMapping[exam].subjects,
  });
  return result;
}
