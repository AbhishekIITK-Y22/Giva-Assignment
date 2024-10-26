# Project Name

A full-stack application with user authentication using Passport.js, a PostgreSQL database, and a React frontend. The app includes secure login, session management, and protected routes.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Technologies](#technologies)
3. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Environment Variables](#environment-variables)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
4. [Database Initialization](#database-initialization)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Project Structure

```plaintext
project-root/
├── backend/
│   ├── server.js
│   ├── .env
│   └── other server files...
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── initialise-db/
│   ├── init.sql
├── .gitignore
└── README.md

Technologies
Backend: Node.js, Express.js, Passport.js, bcrypt.js, PostgreSQL
Frontend: React, React Router, Material-UI
Database: PostgreSQL


Setup Instructions
Prerequisites
Node.js (v14 or higher)
PostgreSQL
Git
Environment Variables
Create a .env file in the /backend directory and add the following:

DB_USER=abhishek
DB_HOST=localhost
DB_NAME=giva
DB_PASSWORD=abhishek
DB_PORT=5432


These environment variables are used to connect to the PostgreSQL database.

Backend Setup
Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/backend

Install dependencies:
npm install

Start the backend server:
node app.js

The server should now be running on http://localhost:3000.
