# Uber Clone Frontend

A modern frontend for an Uber-like ride-hailing platform, built with React and Tailwind CSS. This project provides user and captain (driver) authentication flows, registration, and login pages, and is designed to integrate seamlessly with a Node.js/Express backend.

---

## Key Features

- 🚗 User and Captain (Driver) registration and login
- 🔒 Form validation for all authentication flows
- 🎨 Responsive UI with Tailwind CSS
- 🔄 React Context for user state management
- 🔗 Ready for integration with backend REST APIs
- 🗺️ Routing with React Router

---

## Tech Stack

- **React** (Functional Components, Hooks)
- **React Router** (v6+)
- **Tailwind CSS** (utility-first styling)
- **Vite** (for fast development and builds)
- **React Context API** (for user state)
- (No Redux or TypeScript by default)

---

## File Structure

frontend/
├── public/
├── src/
│ ├── context/
│ │ └── userContext.jsx # React Context for user state
│ ├── pages/
│ │ ├── Home.jsx # Landing page
│ │ ├── UserLogin.jsx # User login page
│ │ ├── UserSignup.jsx # User registration page
│ │ ├── CaptainLogin.jsx # Captain login page
│ │ └── CaptainSignup.jsx # Captain registration page
│ ├── App.jsx # Main app routes
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind CSS imports
├── package.json
├── vite.config.js
└── README.md

## Environment Variables
No environment variables are required for the frontend by default.
If you need to set API base URLs or other config, create a .env file in the root:
VITE_API_URL=http://localhost:5000
And use import.meta.env.VITE_API_URL in your code.

API Integration Overview
This frontend is designed to connect to a backend REST API (Node.js/Express).

## Expected Endpoints:

- POST /users/register — User registration
- POST /users/login — User login
- POST /captains/register — Captain registration
- POST /captains/login — Captain login
- GET /users/profile — User profile (authenticated)
- GET /captains/profile — Captain profile (authenticated)
- GET /users/logout — User logout
- GET /captains/logout — Captain logout

Note:
API calls are not yet implemented in the provided code; currently, form data is stored in state only. You should connect the forms to your backend using fetch or axios.