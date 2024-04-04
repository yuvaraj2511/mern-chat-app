# MERN Stack Project: Real-Time Chat App


## Introduction

This project is a real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) along with Socket.io for real-time messaging. It also utilizes Tailwind CSS and Daisy UI for styling.

### Features

- **Authentication & Authorization:** JWT-based authentication and authorization system.
- **Real-time Messaging:** Chat functionality implemented with Socket.io for instant messaging.
- **Online User Status:** Display online user status using Socket.io and React Context.
- **Global State Management:** Zustand used for global state management.
- **Error Handling:** Error handling implemented both on the server and client sides.
- **Deployment:** Deployment instructions provided for free hosting.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** Tailwind CSS, Daisy UI
- **Authentication:** JSON Web Tokens (JWT)
- **Real-time Communication:** Socket.io
- **Global State Management:** Zustand

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yuvaraj2511/mern-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-chat-app
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=3001
   MONGO_DB_URI=YOUR_MONGODB_URI
   JWT_SECRET=YOUR_JWT_SECRET
   NODE_ENV=development
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

## Build & Run

1. Build the app:

   ```bash
   npm run build
   ```

2. Start the app:

   ```bash
   npm start
   ```

## Deployment

Follow these steps to deploy the app:

1. Build the app:

   ```bash
   npm run build
   ```


