# Task Management System

This repository contains a full-stack task management system with a React front-end and a Node.js back-end.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Cloning the Repository

To clone the repository, run the following command:

````bash
git clone git@github.com:Rvaskar/full-stack-developer-assessment.git

# Project Setup Instructions

## Setting Up the Project

### 1. Install Dependencies

Navigate to the project directory and install the dependencies for both the client and server.

#### Client (React)

Navigate to the client directory:

```bash
cd client

````
### Set Up Environment Variables:
Create a `.env` file in the `server` directory and add the following environment variables:

CONNECTION_URL=mongodb://your_mongodb_url
JWT_SECRET=your_jwt_secret


### Running the Project:
## Client (React):
To start the React development server, navigate to the `client` directory and run:

npm start
# or
yarn start

## Server (Node.js):
To start the Node.js server with `nodemon`, navigate to the `server` directory and run:
nodemon index.js

### Project Structure:
`client`: Contains the React front-end.
`server`: Contains the Node.js back-end.


### Install the dependencies:
npm install
# or
yarn install

### Install the dependencies:
## Client (React):
`axios`: ^1.7.2
`date-fns`: ^3.6.0
`react`: ^18.3.1
`react-dom`: ^18.3.1
`react-router-dom`: ^6.25.0
`react-scripts`: 5.0.1
`web-vitals`: ^2.1.4

## Server (Node.js):
`bcryptjs`: ^2.4.3
`cors`: ^2.8.5
`dotenv`: ^16.4.5
`express`: ^4.19.2
`jsonwebtoken`: ^9.0.2
`mongodb`: ^6.8.0
`mongoose`: ^8.5.1
`nodemon`: ^3.1.4 (devDependency)