// Import the dotenv module
import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config();

// Import the Configuration and OpenAIApi classes from the openai module
import { Configuration, OpenAIApi } from 'openai';

// Create a configuration object with your API key
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAIApi class with the configuration object
const openai = new OpenAIApi(config);

// Define an async function that runs a prompt using the OpenAI API
const runPrompt = async () => {
  // Define the prompt
  const prompt = `
    write me a joke about a cat and a bowl of pasta. Return response in the following parsable JSON format:

    {
        "Q": "what is pasta?",
        "A": "answer"
    }
  `;

  // Create a completion using the gpt-3.5-turbo-0613 model
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo-0613",
    prompt: prompt,
    max_tokens: 100,
    temperature: 1,
  });

  // Get the parsable JSON response from the data property
  const parsableJSONresponse = response.data.choices[0].text;

  // Parse the JSON response into an object
  const parsedResponse = JSON.parse(parsableJSONresponse);

  // Log the question and answer to the console
  console.log("Question: ", parsedResponse.Q);
  console.log("Answer: ", parsedResponse.A);
};

// Run the prompt function
runPrompt();
