import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();

const client = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
/// Create an index with dimension 2 and metric cosine
await client.createIndex('sample-index', {dimension: 2, metric: 'cosine'});



// Connect to the index
const index = client.connect('sample-index');

// Upsert some data as [id, vector] pairs
await index.upsert([
  ['a', [1, 1]],
  ['b', [2, 2]],
  ['c', [-1, -1]],
  ['d', [-2, -2]]
]);

// Query the index with a query vector and k
const results = await index.query([[0, 0]], 2);

// Print the results
console.log(results);