
// api calls to ai


// prompt builder here


// ai call here


import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';
dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const msg = await anthropic.messages.create({
  model: "claude-sonnet-4-20250514",
  max_tokens: 400,
  temperature: 1,
  system: "Respond hello so I know this works please.",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "how are you?"
        }
      ]
    }
  ]
});

console.log(msg.content[0].text);