import OpenAI from "openai";
import dotenv from "dotenv";

const config = new Configuration({
	apiKey: env("OPENAI_API_KEY"),
});

const openai = new OpenAI(config);

const runPrompt = async () => {
	const prompt = `
        write me a joke about a cat and a bowl of pasta. Return response in the following parsable JSON format:

        {
            "Q": "question",
            "A": "answer"
        }

    `;

	const response = await openai.createCompletion({
		model: "gpt-3.5-turbo-0613",
		prompt: prompt,
		max_tokens: 100,
		temperature: 1,
	});

	const parsableJSONresponse = response.data.choices[0].text;
	const parsedResponse = JSON.parse(parsableJSONresponse);

	console.log("Question: ", parsedResponse.Q);
	console.log("Answer: ", parsedResponse.A);
};

runPrompt();