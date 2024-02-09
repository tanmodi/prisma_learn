import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const data = `This is test`;
const em = [];
async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: data,
    encoding_format: "float",
  });
  const result = embedding;
  console.log(em);
  const embed = result.data[0].embedding;
  //   console.log(embed);
  return embed;
}
const r = await main();
// console.log(r);
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  controllerHostUrl: process.env.PINECONE_HOST_URL,
});

const index = pinecone.Index(process.env.PINECONE_INDEX);
const value = Array.from(r);
console.log("value");
console.log(typeof(value));
const final = Object.values(r);
console.log(typeof(final));
index.upsert(value);
