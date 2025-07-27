# To run both backend & frontend



## How I used AI
- simple boilerplate like Axios API call, or adding CORS in Node/Express
- asked Claude 3.5 Haiku and Sonnet 4 to see if it had VISA's Product Design System in its Corpus (it did not)
  - used Haiku 3.5 to parse all the components in the html file from design.visa.com
    - First I inspected element on the sidebar on design.visa.com to see the HTML code
    - I opened the large HTML file in Sublime Text to quickly see what sections I don't need so I can reduce input token cost (searched for "base elements", deleted above that line, then searched "Patterns" and deleted below that line)
    - I gave it 1-shot for an example (using "Accordian"), then asked it to extrapolate that for all the other components in the HTML file. Worked great and was only 8k input tokens
    - I'm using this list of 42 components to feed into the system prompt as context so the AI API call will be something like "find the best match from the user's words in this list of components". It's frugal, fast, and now it's specific to Visa's Product Design System.
