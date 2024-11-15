import { createOpenAI as createGroq, OpenAIProvider } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;
  const yearsOfExperience = reqBody.data.yearsOfExperience;
  const recruiter = reqBody.data.recruiter;
  const companyName = reqBody.data.companyName;
  const language = reqBody.data.languages;

  const groq: OpenAIProvider = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.API_KEY,
  });

  const result = await streamText({
    model: groq("llama-3.1-8b-instant"),
    prompt: `Write a cover letter based on this job posting. Send just one cover letter, NOT more than one. Do not add any separators or lines. Must be finished without drafts.
    Give me the response in ${language} language. Ignore the job posting language.
    The name of the recruiter is ${recruiter}. If the name is undefined, translate the word "Recruiter" to the job posting language.
    The name of the company is ${companyName}. If stated remove the company business structure from any country, like inc., LLC, GmbH, Srl, Ltd, SARL, SA and more. 
    Spend some words about the company product/service if available.
    State that i have ${yearsOfExperience} years of experience. If is is 0, do not mention it. 
    Give me just the body of the cover letter, without final salutation and signatures. It is subdivided into three paragraphs.
    Separate the paragraphs with a line break.
    Don´t add any explanation, give me just the body of the letter. Fit it in one pdf page. Answer in the job posting language. This is the job posting: ${prompt}`,
  });

  return result.toDataStreamResponse();
}
