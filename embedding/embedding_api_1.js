import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "Your text string goes here",
    encoding_format: "float",
  });
  let result = embedding;
  console.log(result);
  console.log(typeof(result.data[0].embedding));
  console.log(typeof(result.data[0]));
  console.log(typeof(result.data));
//   console.log(result.data);
}
main();
