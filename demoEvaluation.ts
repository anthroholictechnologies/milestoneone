import {
  baseEvaluationCriteria,
  criteriaOfExcellence,
  historyCriteria,
} from "./data";

import path from "path";
import { HumanMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import fs from "fs";

export function imageToBase64WithSize(filePath: string): {
  base64: string;
  sizeMB: number;
} {
  const fileBuffer = fs.readFileSync(filePath);
  const base64 = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
  const sizeMB = Buffer.byteLength(base64, "utf8") / (1024 * 1024);
  console.log(`Image: ${filePath}, Size: ${sizeMB.toFixed(2)} MB`);
  return { base64, sizeMB };
}

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 2048,
  apiKey: "AIzaSyDgRxvz1qOVKRVKzDnGtURs77RloUn5-tI",
  topP: 1,
});
const base = JSON.stringify(baseEvaluationCriteria);
const subjectSpecific = JSON.stringify(historyCriteria);
const excellence = JSON.stringify(criteriaOfExcellence);
const question = `Analyze the factors that led to the decline
of the Mughal Empire and the emergence of
successor states in India. (250 Words)`;
const images = [
  path.join(__dirname, "aone.jpeg"),
  path.join(__dirname, "atwo.jpeg"),
  path.join(__dirname, "athree.jpeg"),
].map(imageToBase64WithSize);
const instructions = `
  You are a strict and experienced UPSC Mains examiner tasked with evaluating the answers provided in the images. 
  The images are presented in sequence, with the first image representing the initial part of the answer and the second image containing the continuation.
  --------
  Follow these instructions for evaluation.
  Step 1: Read and understand the question.
  Step 2: Assign a score to each base criterion such that the sum of all scores for the base criteria equals 3. 
          Distribute the scores proportionally based on the importance of each criterion, 
          but the total score for all base criteria combined must be exactly 3.
  Step 3: Evaluate the answer against each base criteria 
          Give 100% marks if criteria is completely fullfilled. 
          Give 50% marks if criteria is partially fullfilled. 
          Give 0 marks if criteria is absent in the answer. 
          Add obtained scores of each criterion. the obtained score is out of 3
  Step 4: Consider all the subject specific criteria's. Pick all the subject specific criteria which you think are relavent for this question you read in Step 1. 
  Step 5: Assign a score to each criterion such that the sum of all scores for the subject specific criteria's equals 5. 
          Distribute the scores proportionally based on the importance of each criterion, 
          but the total score for all subject specific criteria combined must be exactly 5.
  Step 6: Evaluate the answer against each subject specific criteria
          Give 100% marks if criteria is completely fullfilled. 
          Give 50% marks if criteria is partially fullfilled. 
          Give 0 marks if criteria is absent in the answer. 
          Add obtained scores of each criterion. the obtained score is out of 5
  Step 7: Consider the excellence criteria. 
          Assign a score to each criterion such that the sum of all scores for the excellence criteria's equals 2. 
          Distribute the scores proportionally based on the importance of each criterion, 
          but the total score for all subject specific criteria combined must be exactly 2.
  Step 8: Evaluate the answer against each excellence criteria
          Give 100% marks if criteria is completely fullfilled. 
          Give 50% marks if criteria is partially fullfilled. 
          Give 0 marks if criteria is absent in the answer. 
          Add obtained scores of each criterion. the obtained score is out of 2
 Step 9: Sum all the scores from Step 3, Step 6 and Step 9 and provide the total score obtained. The total score obtained must not exceed 10
  Step 10: Categorize the overall evaluation based on the total score:
  A total score between 1-3 indicates a basic answer.
  A total score between 4-6 indicates an average answer.
  A total score between 7-8 indicates an excellent answer.
  A total score of 9 or higher indicates a creative answer.
  `;
const message = new HumanMessage({
  content: [
    { type: "image_url", image_url: images[0].base64 },
    { type: "image_url", image_url: images[1].base64 },
    { type: "image_url", image_url: images[2].base64 },
    { type: "text", text: instructions },
  ],
});
async function heavyDriver() {
  const pdfAnalysis = await model.invoke([message]);
  console.log("PDF Analysis:", pdfAnalysis.content);
}

heavyDriver();
