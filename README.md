# README

This application goes along with the Build a MERN with GraphQL CRUD application - 2 part tutorial series. 

Part 1: Build a GraphQL API with Node, Express, and MongoDB Tutorial can be read at:

https://www.techandstartup.com/tutorials/build-a-graphql-api-with-node-and-express

Part 2: Build a React app with GraphQL Tutorial can be read at:

https://www.techandstartup.com/tutorials/build-a-react-app-with-graphql

Similarly there are two parts to this app:

1) The API is built with Express. It uses MongoDB and the Mongoose.js ORM as it's database. To use this app you need to connect your own MongoDB in the server.js file.
It also uses GraphQL as it's query language.

To install the API's dependencies run:

npm install

The Client is built with React.js and is contained in the client folder. It was generated with create-react-app. It uses Apollo Client for interacting with the GraphQL API. 

To install the client packages run: 

yarn install

To run the app in your development environment run:

npm run dev