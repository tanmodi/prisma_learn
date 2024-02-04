import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();


const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'only give in one word with am/pm time in india when time in japan is 9pm' }],
    model: 'gpt-4',
    max_tokens: 10,
  });
  console.log("ID : ", chatCompletion.id)
  console.log("Prompt token used : ", chatCompletion.usage.prompt_tokens)
  console.log("Completion token used : ", chatCompletion.usage.completion_tokens)
  console.log("Total token used : ", chatCompletion.usage.total_tokens)
  console.log("Message: ",chatCompletion.choices[0].message.content);
//   console.log("Response: ", chatCompletion.data.choices[0].message.content);
}

main();