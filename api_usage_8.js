// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({

//     apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
//   });

//   function getDetails(pet, pet_owner) {
//     const petDetails = {
//       pet: pet,
//       pet_owner: pet_owner,
//     };
//     return JSON.stringify(petDetails);
//   }

//   async function runConversation() {
//     // Define function descriptions
//     const functionDescriptions = [
//       {
//         name: "get_details",
//         description: "Get the name of the pet and the pet owner",
//         parameters: {
//           type: "object",
//           properties: {
//             pet: {
//               type: "string",
//               description: "the name of the pet",
//             },
//             pet_owner: {
//               type: "string",
//               description: "The name of the pet owner",
//             },
//           },
//           required: ["pet", "pet_owner"],
//         },
//       },
//     ];

//     const userPrompt = "Good mornily through this.";

//   // Step 1: send the conversation and available functions to the model
//   const messages = [{ role: "user", content: userPrompt }];
//   const tools = functionDescriptions.map((description) => ({
//     type: "function",
//     function: description,
//   }));

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: messages,
//     tools: tools,
//     tool_choice: "auto",
//   });

// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// function getDetails(pet, pet_owner) {
//   const petDetails = {
//     pet: pet,
//     pet_owner: pet_owner,
//   };
//   return JSON.stringify(petDetails);
// }

// async function runConversation() {
//   // Define function descriptions
//   const functionDescriptions = [
//     {
//       name: "get_details",
//       description: "Get the name of the pet and the pet owner",
//       parameters: {
//         type: "object",
//         properties: {
//           pet: {
//             type: "string",
//             description: "the name of the pet",
//           },
//           pet_owner: {
//             type: "string",
//             description: "The name of the pet owner",
//           },
//         },
//         required: ["pet", "pet_owner"],
//       },
//     },
//   ];

//   const userPrompt = "Good morning, Mrs. Benavides. How has Lily been doing lately? Good morning, Dr. Marquinez. Honestly, she's not been doing well. She's been eating less and seems lethargic. I see. A decrease in appetite and energy. Any other concerns? Yes. I've noticed some large masses around her mammary glands, and she's lost weight. Her spine is visible now. These masses are significant, given her age. Mammary tumors are a possibility. We'll need to assess them closely. I'm also worried about her eyes. She seems to have trouble seeing. Let's check her vision. It appears she has limited vision in her right eye and possibly none in her left. We'll need a more thorough examination for her eyes. Her nails are quite overgrown and might be affecting her gait. Her dental health also needs attention. There's severe tartar buildup and signs of periodontal disease. I rescued her not long ago, so I'm not sure about her entire medical history. And unfortunately, I'm dealing with financial constraints. I understand. Let's focus on what's more urgent. She has a heart murmur, around 2 on 6. Based on today's findings, Lily's condition is quite complex. The mammary tumors, dental issues, and heart murmur are our primary concerns, alongside her vision impairment and weight loss. What are our options, Doctor? For her eyes, a more detailed examination is needed. Regarding the mammary tumors, we should discuss diagnostic options and potential treatments. Nail trimming and addressing her dental issues are also on our list. However, we need to monitor her heart murmur closely. Considering everything, including your financial constraints and Lily's suffering, we should also discuss the possibility of euthanasia. It's a tough decision, but it might be the kindest for her. I was afraid it might come to this. I just want what's best for her, even if it's hard to let go. You're making a brave and compassionate decision. If you choose euthanasia, we'll ensure it's peaceful and dignified. We can arrange for a private cremation afterwards. Thank you, Dr. Martinez. I need a little bit of time to say goodbye. Of course. Take all the time you need. We're here to support you and Lily through this.";

//   // Step 1: send the conversation and available functions to the model
//   const messages = [{ role: "user", content: userPrompt }];
//   const tools = functionDescriptions.map((description) => ({
//     type: "function",
//     function: description,
//   }));

//   const response = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: messages,
//     tools: tools,
//     tool_choice: "auto",
//   });
// }

// runConversation().then(console.log).catch(console.error);

// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// function getDetails(pet, pet_owner) {
//   const petDetails = {
//     pet: pet,
//     pet_owner: pet_owner,
//   };
//   return JSON.stringify(petDetails);
// }

// async function runConversation() {
//   // Define function descriptions
//   const functionDescriptions = [
//     {
//       name: "get_details",
//       description: "Get the name of the pet and the pet owner",
//       parameters: {
//         type: "object",
//         properties: {
//           pet: {
//             type: "string",
//             description: "the name of the pet",
//           },
//           pet_owner: {
//             type: "string",
//             description: "The name of the pet owner",
//           },
//         },
//         required: ["pet", "pet_owner"],
//       },
//     },
//   ];

//   const userPrompt = "Good morning, Mrs. Benavides. How has Lily been doing lately? Good morning, Dr. Marquinez. Honeeed a more thorough examination for her eyes. Her nails are this.";

//   // Step 1: send the conversation and available functions to the model
//   const messages = [{ role: "user", content: userPrompt }];
//   const tools = functionDescriptions.map((description) => ({
//     type: "function",
//     function: description,
//   }));

//   // Fix: Add a return statement to return the response
//   return await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: messages,
//     tools: tools,
//     tool_choice: "auto",
//   });
// }

// runConversation().then(console.log).catch(console.error);

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
//

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
async function getName(prompt) {}
const tool = [
  {
    name: "get_details",
    description: "Get the name of the pet and the pet owner",
    parameters: {
      type: "object",
      properties: {
        pet: {
          type: "object",
          properties: {
            pet_name: {
                
            }
          }
          description: "the name of the pet",
        },
        pet_owner: {
          type: "string",
          description: "The name of the pet owner",
        },
      },
      required: ["pet", "pet_owner"],
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

const result = JSON.parse(response.choices[0].message.function_call.arguments);
console.log(response);
// Return the name and age as a JSON object
console.log(result);
