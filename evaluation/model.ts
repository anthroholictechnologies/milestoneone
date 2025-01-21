import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  maxOutputTokens: 5000,
  apiKey: "AIzaSyDgRxvz1qOVKRVKzDnGtURs77RloUn5-tI",
  topP: 1,
  verbose: true
});