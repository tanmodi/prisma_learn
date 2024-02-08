import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
  controllerHost: process.env.PINECONE_CONTROLLER_HOST
});

const index = pc.index('tanmay');

await index.namespace('tm').upsert([
    {
       id: 'vec1', 
       values: [0.1, 0.1, 0.1, 0.1, 0.1],
       metadata: { genre: 'drama' }
    },
    {
       id: 'vec2', 
       values: [0.2, 0.2, 0.2, 0.2, 0.2],
       metadata: { genre: 'action' }
    },
    {
       id: 'vec3', 
       values: [0.3, 0.3, 0.3, 0.3, 0.3],
       metadata: { genre: 'drama' }
    },
    {
       id: 'vec4', 
       values: [0.4, 0.4, 0.4, 0.4, 0.4],
       metadata: { genre: 'action' }
    }
  ]);

  await index.namespace('tm').query({
    topK: 2,
    vector: [0.3, 0.3, 0.3, 0.3, 0.3],
    includeValues: true,
    includeMetadata: true,
    filter: { genre: { '$eq': 'action' }}
  });