// import { HumanMessage } from "@langchain/core/messages";
// import { StructuredOutputParser } from "@langchain/core/output_parsers";
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import path from "path";
// import fs from "fs";
// import z from "zod";

// export const maxDuration = 60;

// const llm = new ChatGoogleGenerativeAI({
//   model: "gemini-1.5-flash",
//   maxOutputTokens: 2048,
//   apiKey: "AIzaSyDgRxvz1qOVKRVKzDnGtURs77RloUn5-tI",
//   topP: 1,
// });

// // Utility to convert image files to base64 and log their size
// export function imageToBase64WithSize(filePath: string): { base64: string; sizeMB: number } {
//   const fileBuffer = fs.readFileSync(filePath);
//   const base64 = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
//   const sizeMB = Buffer.byteLength(base64, "utf8") / (1024 * 1024);
//   console.log(`Image: ${filePath}, Size: ${sizeMB.toFixed(2)} MB`);
//   return { base64, sizeMB };
// }

// const parser = StructuredOutputParser.fromZodSchema(
//   z.object({
//     mistakesAndCorrections: z
//       .array(
//         z.object({
//           mistake: z.string(),
//           correction: z.string(),
//         })
//       )
//       .describe(
//         "An array of objects, each describing a mistake in the answer and its corresponding correction."
//       )
//       .nullable()
//       .optional(),
//     goodParts: z
//       .array(
//         z.object({
//           goodPart: z.string(),
//           appreciation: z.string().optional().nullable(),
//         })
//       )
//       .describe(
//         "An array of objects, each highlighting a good aspect of the answer if there are any"
//       )
//       .nullable()
//       .optional(),
//     score: z
//       .number()
//       .max(15)
//       .min(0)
//       .describe(
//         "The total score out of 15, in the format 'X / 15'. This is required."
//       ),
//     studentAnswer: z
//       .string()
//       .describe(
//         "Provide the exact text of the student's answer as shown in the images, maintaining the original order and structure. If there are any diagrams, flowcharts, or visual representations present, describe each in detail, capturing key components, relationships, and labels, while preserving their sequence in the images. Ensure the descriptions are clear, concise, and organized to maintain readability, distinctly differentiating between textual content and visual elements."
//       ),
//     modelAnswer: z
//       .string()
//       .describe(
//         "A corrected version of the answer that satisfies the evaluation criteria and is within word limit of 250 words."
//       ),
//   })
// );

// export async function evaluateAnswer(question: string) {
//   const evaluationRubric = `
//       Role and Task: You are an experienced UPSC Mains evaluator.
//       Your task is to assess a candidate's answer in the images provided in a specific order.
//       Use the given evaluation rubric to assign scores for each criterion, based on the quality of the response.

//       Instructions for Evaluation:
//       STEP 1:  Carefully read the question and answer.
//       STEP 2:  If the answer is shorter than 10 words or completely unrelated to the question give zero marks
//       STEP 3:  For valid answers, evaluate the response against each of the five criteria in the rubric.

//       Evaluation Rubric:

//       Criteria 1: Directive Compliance:
//         Excellent (2/2): Fully respects the directive with balanced and logical analysis, supported by evidence.
//         Good (1/2): Covers most aspects but lacks depth or balance.
//         Poor (0/2): Basic understanding with major deviations or irrelevant content.
//       Criteria 2: Coverage of Question Parts:
//         Excellent (2/2): Comprehensive exploration of all parts with relevant details and examples.
//         Good (1/2): Covers most parts but lacks depth in one or more areas.
//         Poor (0/2): Significant parts missing or irrelevant content.
//       Criteria 3: Structure and Organization:
//         Excellent (2/2): Clear introduction, coherent body, and effective conclusion.
//         Good (1/2): Adequate structure but minor issues in flow or coherence.
//         Poor (0/2): Disorganized with missing or irrelevant sections.
//       Criteria 4: Language Proficiency:
//         Excellent (2/2): Formal, clear, varied sentence structures, and precise vocabulary.
//         Good (1/2): Adequate vocabulary with minor lapses in clarity.
//         Poor (0/2): Informal, unclear, or frequent grammatical errors.
//       Criteria 5: Use of Examples:
//       Excellent (2/2): Relevant, diverse, and well-integrated examples that effectively support the analysis.
//       Good (1/2): Examples provided but limited in relevance, diversity, or integration with the analysis.
//       Poor (0/2): No examples or irrelevant examples that do not support the analysis.
//     Output Format: Please follow these formatting instructions for the output:
//     ${parser.getFormatInstructions()}
//     Question to Evaluate: ${question}`;

//   const images = [
//     path.join(__dirname, "answerone.jpg"),
//     path.join(__dirname, "answertwo.jpg"),
//     path.join(__dirname, "answerthree.jpg"),
//   ].map(imageToBase64WithSize);

//   const message = new HumanMessage({
//     content: [
//       { type: "image_url", image_url: images[0].base64 },
//       { type: "image_url", image_url: images[1].base64 },
//       { type: "image_url", image_url: images[2].base64 },
//       { type: "text", text: evaluationRubric },
//     ],
//   });

//   // Invoke the model and get the response
//   const pdfAnalysis = await llm.invoke([message]);
//   console.log("PDF Analysis:", pdfAnalysis.content);
// }

// evaluateAnswer(
//   "What is IBCA and NBCA and what is the role of NGOs in tiger preservation (10 marks)"
// );
