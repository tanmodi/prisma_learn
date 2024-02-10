import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config();

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  controllerHostUrl: process.env.PINECONE_HOST_URL,
});

const index = pinecone.Index(process.env.PINECONE_INDEX);
const value = Array.from(r);
console.log("value");

index.upsert([
  {
    id: "1",
    // array value
    values: array,
    metadata: {
      name: "Tanmay",
      email: "tanmaymodi64@gmail.com",
      linkedin: "https://www.linkedin.com/in/tanmodi",
      github: "https://github.com/tanmodi",
    },
  },
]);
