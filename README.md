# Visa Design Component Search
An intelligent search that lets you use plain English to find a component for your app from [Visa's Product Design System](https://design.visa.com)

## Deployed
https://visacomponentselector-production.up.railway.app

## Design Decisions
- Monorepo (frontend & backend same repo) to make deployment and git branch management easier
- Javascript, not Typescript, because I'm new to this component library and wanted to keep it as simple as possible. 
- Minimalistic Landing page to draw the user in with a tiny ask, then we go to the Searching page when the user is already committed to using the app and wants to see more information

## How I used AI
- I use Github Co-Pilot with Claude Sonnet 4 in VS Code. Mainly in "Ask" mode so it's faster, and rarely in "Agent" mode like creating synthetic data
- to quickly add simple boilerplate like the Axios API call, or adding CORS in Node/Express
- asked Claude 3.5 Haiku and Sonnet 4 to see if it had VISA's Product Design System in its training corpus (it did not)
  - so I used Haiku 3.5 to parse all the components in the html file from design.visa.com to make ./backend/data/list_of_components.js for the prompt
- helped me debug CSS
- helped me debug nuanced async issues 
- helped me debug sending objects from backend to frontend and passing into child components
- helped me quickly add event listener for using Enter key inside the input box for search.jsx
- created synthetic data for backend/data.js from 1-shot of "Icons and illustrations" that I made from the website
- helped me quickly add a sticky button to copy code into the user's clipboard
- helped me quickly build a dockerfile and debug it
- helped me debug deployment issues with CORS, .env variables, Docker, nginx, and Railway quirks 
- helped me debug useContext() deep nesting of data



## If I had more time
- add Light/Dark mode
- better UX for mobile
- SQL database from automated web scraping of design.visa.com
- user login and saved history
- make template for frontend (so navbar and footer are stable, and only content inside changes)