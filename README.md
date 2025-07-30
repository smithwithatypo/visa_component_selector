# Visa Design Component Search
An intelligent search that lets you use common English to find a component for your app from [Visa's Product Design System](https://design.visa.com)

## Deployed
https://visacomponentselector-production.up.railway.app

## Design Decisions
- Monorepo (frontend & backend same repo) to make deployment and git branch management easier
- Vite for fast-reload in development and easily building static files
- Javascript, not Typescript, because I'm new to this component library and wanted to keep it as simple as possible
- Minimalistic landing page to draw the user in with a tiny ask that helps them calm down (because they're likely using our search because they're new to this and scared and frustrated already), then we go to the Searching page to display information in a more organized way. Interactions are encouraged and I tried to limit our tabs to 3 so we don't overwhelm the user with text
- Node, express, and JS (not TS) to keep it simple and use code I've built before
- Anthropic's Sonnet 4 because it's very good and reasonably priced right now
- Railway hosting because I have a few apps running on it already, plus it's built on reliable AWS, plus CICD is easy because it connects to my GitHub repo and builds a container from the Dockerfile when I push to the main branch. Plus it gives a free public https address and has great internal networking if I had time to set that up
- Nginx web server because that's what AI suggested and it worked first try. If I hand-rolled this, I'd use Caddy because it's easier to set up and debug than nginx

## How I used AI
- I used Github Co-Pilot with Claude Sonnet 4 in VS Code. Mainly in "Ask" mode because it's fast and so I can review each line of code before inserting it
- helped me quickly add simple boilerplate like the Axios API call, or adding CORS in Node/Express
- asked Claude 3.5 Haiku and Sonnet 4 to see if it had VISA's Product Design System in its training corpus (they did not)
  - so I used Haiku 3.5 to parse all the components in the html file from design.visa.com to make ./backend/data/list_of_components.js for the prompt
- helped me debug CSS
- helped me debug nuanced async issues
- helped me debug sending objects from backend to frontend and passing into child components
- helped me quickly add event listener for using the Enter key to submit the input in Search.jsx
- created synthetic data for backend/data.js from 1-shot of "Icons and illustrations" that I hand-typed from the docs
- helped me quickly add a sticky button to copy code into the user's clipboard
- helped me quickly build a dockerfile and debug it
- helped me debug deployment issues with CORS, .env variables, Docker, nginx, and Railway quirks 
- helped me debug useContext() deep nesting of data

## If I had more time
- add more Preview.jsx functionality (add more components in /shared/ui/... and present them when the user clicks a tab)
- add a few subtle designs to the background. Like dark gray textures or geometric shapes
- add Light/Dark mode
- better UX for mobile
- SQL database from automated web scraping of design.visa.com
- user login and saved history
- make template for frontend (so navbar and footer are stable, and only content inside changes)
- add loading animation for the API call to the backend and AI provider
- make the style of Code.jsx a constant ratio of the screen so <Preview /> shows up even when there's a lot of code being shown
- refactor to Typescript and use data models for easier automated testing and so I can be more certain what data formats are being sent within nested components and to the backend via JSON
