// PROMPT
import { component_list_for_AI } from './data/list_of_components.js'
const system_prompt = `
- be an expert on the VISA product design system. It’s a collection of pre-made components for web development.
- the user is giving you an unstructured idea of what component they want and your job is to convert their words into a list of 3 components from this list of available components that matches their text the closest.
- figure out all of the components they might find useful from the following list of available and print out only the component names that best matches what they want. print only the component names from this list and nothing else. delimit using commas like a csv.

${component_list_for_AI}
`


// API CALL
import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';
dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function getComponentMatch(userInput) {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      temperature: 1,
      system: system_prompt,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: userInput
            }
          ]
        }
      ]
    });

    return msg.content[0].text.trim();
  } catch (error) {
    console.error('AI API call failed:', error);
    throw error;
  }
}

