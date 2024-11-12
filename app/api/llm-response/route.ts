import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  const groq = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.API_KEY,
  });

  const result = await streamText({
    model: groq('llama-3.1-8b-instant'),
    prompt: prompt,
  });

  return result.toDataStreamResponse();
}
