import { createGroq, GroqProvider } from "@ai-sdk/groq";
import { streamText } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    // Extract messages and data from the request body
    const { messages, data } = body;
    const prompt = messages?.[messages.length - 1]?.content || "";

    // Destructure data with default values
    const {
      yearsOfExperience = 0,
      recruiter = "",
      companyName = "",
      languages = "",
      resume = "",
      personalFirstName = "",
      personalLastName = "",
    } = data || {};

    const groq: GroqProvider = createGroq({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: process.env.API_KEY,
    });

    const result = streamText({
      model: groq("llama-3.1-8b-instant"),
      maxTokens: 400,
      system:
        "You are a professional cover letter writer. You are able to write tailored cover letter to a specific job, professionally.",
      prompt: `Write a cover letter based on this job posting: ${prompt}.
      Write a tailored cover letter based on this skills about me: ${resume}.
      Do not write skills that are not mentioned in this prompt. If the skills are undefined send the best possible match with the job posting skills required.
      Send just one cover letter, NOT more than one. Do not add any separators or lines. Must be finished without drafts.
      Give me the response in ${languages} language. Ignore the job posting language.
      The name of the recruiter is ${recruiter}. If the name is undefined, translate the word "Recruiter" in the same language as the job posting. Do not add any genders.
      The name of the company is ${companyName}. If stated remove the company business structure from any country, like inc., LLC, GmbH, Srl, Ltd, SARL, SA and more. 
      Spend some words about the company product/service if available.
      State that i have ${yearsOfExperience} years of experience. If is is 0, do not mention it. 
      Give me just the body of the cover letter, and the final salutation, with my name: ${personalFirstName} ${personalLastName}. It is subdivided into three paragraphs.Separate the paragraphs with a line break.
      Don´t add any explanation, give me just the body of the letter. Fit it in one pdf page.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
