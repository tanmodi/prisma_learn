import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();


const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{
      role: 'system', content:'you are vetnary doctor assistant your only job is give me the nameof the pet and pet owner.'
    },
      { 
      role: 'user', content: 'Good morning, Mrs. Benavides. How has Lily been doing lately? Good morning, Dr. Marquinez. Honestly, shes not been doing well. Shes been eating less and seems lethargic. I see. A decrease in appetite and energy. Any other concerns? Yes. Ive noticed some large masses around her mammary glands, and shes lost weight. Her spine is visible now. These masses are significant, given her age. Mammary tumors are a possibility. Well need to assess them closely. Im also worried about her eyes. She seems to have trouble seeing. Lets check her vision. It appears she has limited vision in her right eye and possibly none in her left. Well need a more thorough examination for her eyes. Her nails are quite overgrown and might be affecting her gait. Her dental health also needs attention. Theres severe tartar buildup and signs of periodontal disease. I rescued her not long ago, so Im not sure about her entire medical history. And unfortunately, Im dealing with financial constraints. I understand. Lets focus on whats more urgent. She has a heart murmur, around 2 on 6. Based on todays findings, Lilys condition is quite complex. The mammary tumors, dental issues, and heart murmur are our primary concerns, alongside her vision impairment and weight loss. What are our options, Doctor? For her eyes, a more detailed examination is needed. Regarding the mammary tumors, we should discuss diagnostic options and potential treatments. Nail trimming and addressing her dental issues are also on our list. However, we need to monitor her heart murmur closely. Considering everything, including your financial constraints and Lilys suffering, we should also discuss the possibility of euthanasia. Its a tough decision, but it might be the kindest for her. I was afraid it might come to this. I just want whats best for her, even if its hard to let go. Youre making a brave and compassionate decision. If you choose euthanasia, well ensure its peaceful and dignified. We can arrange for a private cremation afterwards. Thank you, Dr. Martinez. I need a little bit of time to say goodbye. Of course. Take all the time you need. Were here to support you and Lily through this.' }],
    model: 'gpt-3.5-turbo',
    // max_tokens: 10,
  });
  console.log("ID : ", chatCompletion.id)
  console.log("Prompt token used : ", chatCompletion.usage.prompt_tokens)
  console.log("Completion token used : ", chatCompletion.usage.completion_tokens)
  console.log("Total token used : ", chatCompletion.usage.total_tokens)
  console.log("Message: ",chatCompletion.choices[0].message.content);
//   console.log("Response: ", chatCompletion.data.choices[0].message.content);
}

main();