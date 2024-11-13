import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;
  const yearsOfExperience = reqBody.data.yearsOfExperience;

  const groq = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.API_KEY,
  });

  const result = await streamText({
    model: groq("llama-3.1-8b-instant"),
    prompt: `Create a cover letter based on this job posting. State that I have ${yearsOfExperience} years of experience. Refer the company name and product/service if available. Just refer to it if you are sure that the company name is stated. If is not stated, use the word "your company" for the name of the company. Give me just the body of the cover letter. Don´t add any explanation, give me just the body. Also avoid the ending salutation. Fit it in one pdf page: ${prompt}`,
  });

  return result.toDataStreamResponse();
}
