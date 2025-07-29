# To run both backend & frontend



## How I used AI
- to quickly add simple boilerplate like the Axios API call, or adding CORS in Node/Express
- asked Claude 3.5 Haiku and Sonnet 4 to see if it had VISA's Product Design System in its training corpus (it did not)
  - so I used Haiku 3.5 to parse all the components in the html file from design.visa.com
    - First I inspected element on design.visa.com to see the HTML code for just the left sidebar
    - I opened the large HTML file in Sublime Text to quickly see what sections I don't need so I can reduce input token cost (searched for "base elements", deleted above that line, then searched "Patterns" and deleted below that line)
    - I gave the LLM 1-shot for an example (using "Accordian" with the HTML around it), then asked it to extrapolate that for all the other components in the HTML file. Worked great and was only 8k input tokens
    - Now I can use this list of 42 components to feed into the system prompt as context so the AI API call will be something like "find the best match from the user's words in this list of components". It's frugal, fast, and now it's specific to Visa's Product Design System
- helped me debug CSS
- helped me debug async issues 
- helped me debug sending objects from backend to frontend and passing into child components


## If I had more time
- add Light/Dark mode
- better UX for mobile
- SQL database
- user login and saved history
- make template for frontend (so navbar and footer are stable, and only content inside changes)