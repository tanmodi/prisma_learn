import OpenAI from 'openai';
import dotenv from 'dotenv';
const openai = new OpenAI();

// Example dummy function hard coded to return flight information
function getFlightInfo(loc_origin, loc_destination) {
  const flightInfo = {
    loc_origin: loc_origin,
    loc_destination: loc_destination,
    datetime: new Date().toISOString(),
    airline: "KLM",
    flight: "KL643",
  };
  return JSON.stringify(flightInfo);
}

async function runConversation() {
  // Step 1: send the conversation and available functions to the model
  const messages = [
    { role: "user", content: "When's the next flight from Amsterdam to New York?" },
  ];
  const functions = [
    {
      type: "function",
      name: "get_flight_info",
      function: {
        name: "get_flight_info",
        description: "Get flight information between two locations",
        parameters: {
          type: "object",
          properties: {
            loc_origin: {
              type: "string",
              description: "The departure airport, e.g. AMS",
            },
            loc_destination: {
              type: "string",
              description: "The destination airport, e.g. JFK",
            },
          },
          required: ["loc_origin", "loc_destination"],
        },
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: messages,
    tools: functions,
    tool_choice: "auto",
  });
  const responseMessage = response.choices[0].message;

  // Step 2: check if the model wanted to call a function
  const toolCalls = responseMessage.tool_calls;
  if (toolCalls) {
    const availableFunctions = {
      get_flight_info: getFlightInfo,
    };
    messages.push(responseMessage);
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(toolCall.function.arguments);
      const functionResponse = functionToCall(
        functionArgs.loc_origin,
        functionArgs.loc_destination
      );
      messages.push({
        tool_call_id: toolCall.id,
        role: "tool",
        name: functionName,
        content: functionResponse,
      });
    }
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
    });
    return secondResponse.choices;
  }
}

runConversation().then(console.log).catch(console.error);
