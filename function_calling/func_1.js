import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const tool = [
    {
      name: "get_details",
      description: "Get the details of the pet and the pet owner",
      parameters: {
        type: "object",
        properties: {
          pet_details: {
            type: "object",
            properties: {
              pet_name: {
                type: "string",
                description: "The name of the pet",
              },
              pet_type: {
                type: "string",
                description: "type of the pet (eg: dog, cat, etc.)",
              },
              pet_gender: {
                type: "string",
                description: "gender of the pet (eg: male, female, not specified)",
              }
            },
            required: ["pet_name", "pet_owner"],
          },
          pet_owner: {
            type: "string",
            description: "The name of the pet owner",
          },
        },
        required: ["pet", "pet_owner"],
      },
    },
    {
        name: "soap_notes",
        description: "you are the vetnary doctor assistant give the notes of the pet",
        parameters: {
            type: "object",
            properties: {
                subjective: {
                    type: "string",
                    description: "give all the subjective details of the pet",
                },
                objective: {
                    type: "string",
                    description: "give all the objective details of the pet",
                },
                assessment: {
                    type: "string",
                    description: "give all the assessment details of the pet",
                },
                plan: {
                    type: "string",
                    description: "give all the plan details of the pet",
                }
            }

        },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Good morning, Mrs. Benavides. How has Lily been doing lately? Good morning, Dr. Marquinez. Honeeed a more thorough examination for her eyes. Her nails are this.",
      },
    ],
    functions: tool,
    function_call: {
      name: "get_details",
    },
  });