import { createOpenAI as createGroq, OpenAIProvider } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;
  const yearsOfExperience = reqBody.data.yearsOfExperience;
  const recruiter = reqBody.data.recruiter;

  const groq: OpenAIProvider = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.API_KEY,
  });

  const result = await streamText({
    model: groq("llama-3.1-8b-instant"),
    prompt: `Create a cover letter based on this job posting. Send just one cover letter, not more than one. Dont add any separators or lines. The name of the recruiter is ${recruiter}, add the name in the initial salutation. State that i have ${yearsOfExperience} years of experience in the field.
    Refer the company name and product/service. Refer the name or product JUST if you are absolutely sure that the company name is stated. 
    If is not stated, use the word "your company" for the name of the company. Give me just the body of the cover letter, 
    without final salutation and signatures. It is subdivided into three paragraphs.
    Separate the paragraphs with a line break.
    Don´t add any explanation, give me just the body of the letter. Fit it in one pdf page. Answer in the job posting language. This is the job posting: ${prompt}`,
  });

  return result.toDataStreamResponse();
}
