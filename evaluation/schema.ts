import { z } from "zod";
import { Subjects } from "./syllabusDatabase";

export const predictSubjectsOutputFormat = z.object({
  subjectsRelatedToQuestion: z
    .array(z.nativeEnum(Subjects).describe("Enum value representing a subject"))
    .describe("The most relavent subjects to the question."),
  reasonsWhySubjectsArePicked: z
    .string()
    .describe(
      "The reason why the subject is relavent to the question. Take reference from the syllabus"
    ),
});

export const evaluationCriteriaSchema = z.array(
  z.object({
    parameter: z.string().describe("The name of the parameter"),
    logic: z.array(z.string().describe("the logics of the parameter")),
    marks: z.number().describe("the marks assigned to the parameter"),
    reason: z
      .string()
      .describe(
        "The importance of the parameter in context of the question asked and justificaion of the marks provided to it."
      ),
  })
);

export const evaluationResponse = z.object({
  parameter_scores: z
    .array(
      z.object({
        parameter: z
          .string()
          .describe(
            "The name of the evaluation parameter being assessed. Examples: 'Understanding & Interpretation', 'Content Quality', 'Language & Expression', 'Structure & Organization'. This provides context for the specific aspect of the answer being scored."
          ),
        score: z
          .number()
          .min(0)
          .describe(
            "The actual score awarded for this parameter based on the evaluation. This score should reflect how well the student's answer met the expectations of the parameter."
          ),
        max_score: z
          .number()
          .min(1)
          .describe(
            "The maximum possible score for this parameter. This is the upper limit of the score that can be awarded for this evaluation criterion."
          ),
        justification: z
          .string()
          .describe(
            "A detailed and specific explanation for the score given for this parameter. Avoid superficial explanations. If pointing out mistakes, provide concrete examples from the answer where the mistake occurred. Similarly, if praising, point out specific areas of the answer where the student performed well. This should help the student understand where they need to improve or what they did right."
          ),
      })
    )
    .describe(
      "An array containing evaluation scores for each parameter. Each item in this array corresponds to a parameter being evaluated, along with the score awarded, the maximum possible score, and a justification for the result."
    ),
  total_score: z
    .number()
    .min(0)
    .describe(
      "The final score awarded to the student, which is the sum of all parameter scores. This score reflects the overall quality of the answer based on all evaluation parameters."
    ),
  overall_feedback: z
    .object({
      summary: z
        .string()
        .describe(
          "A concise summary of the overall performance, highlighting the general strengths and weaknesses of the answer based on the evaluation."
        ),
      suggestions: z
        .array(
          z.object({
            suggestion: z
              .string()
              .describe(
                "An actionable suggestion for improving the answer. This should provide a specific detail about how the student can address the weakness or improve their answer."
              ),
            example: z
              .string()
              .describe(
                "A concrete implementation of the suggestion, including relevant details and examples. For instance, if the suggestion involves strengthening critical thinking by incorporating multiple perspectives, the example should specifically analyze real-world cases, their outcomes, and how they apply to the context of the answer. Avoid generic statements and ensure the example demonstrates how to improve the answer directly."
              ),
          })
        )
        .describe(
          "A list of actionable suggestions for every parameter the answer fails to meet, along with concrete examples implementing those suggestions. Examples must directly demonstrate how to apply the suggestion to the answer, providing clarity and practical insight."
        ),
    })
    .describe(
      "Overall feedback about the student's answer, including a summary and actionable suggestions with implemented examples."
    ),
  improved_answer: z
    .string()
    .describe(
      "An improved version of the student's answer, incorporating all suggestions and changes. The improved answer should include embedded inline notes explaining the changes made at specific points in the text. These notes should provide clarity on why the change was made and how it improves the response."
    ),
});
