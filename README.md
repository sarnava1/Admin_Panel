# Admin_Panel
This is a small admin panel app which uses MongoDB as database, nodejs as backend and React js as frontend.

## Quick Start

## Install dependencies for server
npm install

## Install dependencies for client
npm run client-install

## Run the client & server with concurrently
npm run dev

## Run the Express server only
npm run server

## Run the React client only
npm run client

> Server runs on http://localhost:5000 and client on http://localhost:3000

> You will need to create a keys_dev.js in the server config folder with

module.exports = { <br>
  mongoURI: 'YOUR_OWN_MONGO_URI', <br>
  secretOrKey: 'YOUR_OWN_SECRET'  <br>
};

