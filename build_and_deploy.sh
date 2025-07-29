#!/bin/sh

cp backend/.env.sample backend/.env

cd backend
npm install
# npm run dev  # this command starts the backend at port 3000

cd ../frontend
npm install
# npm run dev  # this command starts the frontend at port 5173

cd ..

# below are docker commands if you need them
# docker build -t visa-interview .
# docker run -d -p 80:80 -p 3000:3000 --name visa-app visa-interview