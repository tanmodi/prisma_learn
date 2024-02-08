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
  console.log(embedding);
  console.log(embedding.data[0].embedding);
}
main();
