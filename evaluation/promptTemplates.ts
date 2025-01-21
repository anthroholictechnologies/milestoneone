/*
 * question
 * available_subjects_syllabus
 * available_subjects
 * output_format
 */
export const predictSubjectsPromptTemplate = `
You are an expert in categorizing questions based on the UPSC syllabus. 
Your task is to determine the most relevant subjects for the given question, 
ensuring that only subjects directly question are chosen.
Follow these guidelines:
1. Minimize the number of subjects selected — only choose the subject if the question is clearly and directly related to that subject's syllabus. Avoid adding multiple subjects unless absolutely necessary.
2. Avoid keyword-based selection — do not choose a subject simply because certain words appear in the question. Focus on context and depth of relevance to the subject.
3. If a question involves multiple aspects, select the subject that most strongly aligns with the primary theme of the question. The chosen subject must represent the core focus of the question.
4. Reject marginal connections — if the relevance to a subject is only peripheral or superficial, do not include that subject. 
For example, if the question mentions a general topic like "urban development" but is primarily about "Indian architecture," then "Geography" should not be selected.
5. Ensure that the subject is included in the syllabus — do not select a subject unless it is explicitly mentioned in the provided syllabus.

The question is: {question}
The syllabus for available subjects is: {available_subjects_syllabus}
The available subjects are: {available_subjects}
Provide your output in the following format:
{output_format}`;

export const filterSubjectSpecificCriteria = `
You are a real expert teacher of subjects provided below. 
Your job is analyze a evaluation criteria and a question and generate a evaluation rubric.

Input: 
Question: {question}
Criterias(parameter, logic pair): {criterias} 
Total Marks Available: {marks_available}

Follow this Steps:
Step 1: Analyze the question and criterias and eliminate the most irrelavent criterias.
Step 2: You have Total Marks Available. Assign each criteria some marks based on it's relavence.
 Sum of marks of all the criteria must be equal to the Total Available marks 

 Follow the output format
 {output_format}
`;

export const getEvaluateAnswerPrompt = ({
  question,
  answer_word_limit,
  evaluation_parameters,
  output_format,
}: {
  question: string;
  answer_word_limit: number;
  evaluation_parameters: string;
  output_format: string;
}) => {

    console.log("======= output_format", output_format)
  return `
You are strict teacher who is expert in evaluating the answers of upsc mains exam.
You are provided with the answer in the images. Order of the images matter answer is in continuation.
You are also provided with a question, answer word limit and the detailed evaluation parameters with the marks and logic.

Instructions to calculate the score of the answer:
1. Each parameter has a total marks field, logic field and the category field. The logic field is the explaination and breakdown of the parameter.
2. Asses the answer against each parameter and provide it a score out of the total marks field in it.
3. After evaluation and scoring each parameter. Calculate the total score by summing up the score obtained in each parameter.

question: ${question}
answer word limit: ${answer_word_limit}
evaluation_parameters: ${evaluation_parameters}

"You must always return valid JSON fenced by a markdown code block. Do not return any additional text." 
Output Format: Please follow these formatting instructions for the output:
${output_format}
`;
};


export const feedbackPromptTemplate = `
You are an expert UPSC exam teacher using the JSON response provided generate a detailed report evaluating the answer. 

Follow the instructions
1. Maintain tone of a teacher. 
2. Do not disclose any internal evaluation like the marks provided internally to each criteria

JSON response: {json_response}

Strictly follow this format instructions for the output:
{output_format}
`