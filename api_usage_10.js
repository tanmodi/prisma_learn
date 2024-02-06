import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// Define a function that takes the user prompt as an argument
async function getNameAndAge(prompt) {
  // Define a tool that extracts the name and age from the prompt
  const tool = [{
    name: "extract_name_and_age",
    description: "Extract the name and age from the input",
    parameters: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "The name of the person",
        },
        age: {
          type: "number",
          description: "The age of the person",
        },
      },
      required: ["name", "age"],
    },
  }];

  // Call the OpenAI chat completions API with the prompt and the tool
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    functions: tool,
    function_call: {
        "name": "extract_name_and_age",
    },
  });

  // Parse the JSON response from the API
  const result = JSON.parse(response.choices[0].message.function_call.arguments);
  console.log(response)
  // Return the name and age as a JSON object
  return result;
}

// Test the function with an example prompt
const prompt = "Hi, my name is John and I am 25 years old.";
getNameAndAge(prompt).then(console.log).catch(console.error);

// Output: { name: "John", age: 25 }
