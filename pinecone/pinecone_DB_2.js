import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";

dotenv.config();

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
// const pinecone = new Pinecone();

type MovieMetadata = {
  title: string,
  runtime: numbers,
  genre: 'comedy' | 'horror' | 'drama' | 'action'
}

// Specify a custom metadata type while targeting the index
const index = pinecone.index<MovieMetadata>('test-index');

// Now you get type errors if upserting malformed metadata
await index.upsert([{
  id: '1234',
  values: [
    1, 2, 3
  ],
  metadata: {
    genre: 'Gone with the Wind',
    runtime: 238,
    genre: 'drama',
    category: 'classic'
  }
}])

const results = await index.query({
   vector: [
    .1
   ],
   filter: { genre: { '$eq': 'drama' }}
})
const movie = results.matches[0];

if (movie.metadata) {
  const { title, runtime, genre } = movie.metadata;
  console.log(`The best match in drama was ${title}`)
}