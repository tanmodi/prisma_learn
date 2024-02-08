import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
await pc.createIndex({
  name: 'sample-index',
  dimension: 1536,
  spec: {
    serverless: {
      cloud: 'aws',
      region: 'us-west-2',
    },
  },
});