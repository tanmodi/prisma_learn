import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const data = `Tanmay Modi    (+91) 9205875182 •   tanmaymodi64@gmail.com 
  linkedin.com/in/tanmodi • github.com/tanmodi 
  Vaishali, Ghaziabad, UP 201010 
  
  I am a fresh MCA graduate with a passion for front-end development. I have learned HTML, CSS and JS through online 
  courses and personal projects. I have created several websites and web applications that showcase my skills and 
  creativity. I am looking for an opportunity to work with a team of professionals and learn from their experience. 
  Academics 
  
  2021-23 Master of computer application 
  CGPA:  7.06 Dr. A. P. J. Abdul Kalam Technical University , Lucknow 
  2017-20 Bachelor of computer application 
  CGPA:  7.08 Guru Gobind Singh Indraprastha University, New Delhi 
  2017 Class 10+2 
  PERCENTAGE: 70% CBSE 
  2015 Class 10th 
  CGPA: 7 CBSE 
  
  Projects 
  
  Amazon Website Clone 
  • Developed an Amazon website clone using HTML, CSS, and JavaScript 
  • Implemented features such as product display, shopping cart, checkout, and payment. 
  • Ensured responsive design and cross-browser compatibility. 
  • Applied best practices of web development and security. 
  • Created a user-friendly and attractive interface. 
  Conference management system code 
  • Website that provides a comprehensive and efficient solution for organizing, managing, and promoting 
  conferences and similar events. 
  • FRONTEND: HTML, CSS, JS 
  • BACKEND: DJANGO, SQLite, SMS API, E-mail integration (OUTLOOK), Google maps 
  
  Skills 
  
  • LINUX (UBUNTU, FEDORA) 
  • GIT AND GITHUB 
  • HTML 
  • CSS 
  • JAVASCRIPT 
  • REACT JS`;
const em = [];
async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: data,
    encoding_format: "float",
  });
  const result = embedding;
  console.log(em);
  const embed = result.data[0];
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
const final = Object.values(value);
console.log(typeof(final));
// index.upsert(value);
