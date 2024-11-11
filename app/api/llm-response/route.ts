
export async function POST(req: Request, res: Response) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  console.log(prompt);
  // return result.toDataStreamResponse();
}
