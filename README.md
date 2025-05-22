# 🔐 Simple Authentication in React JS (Qualifier Task)

This project is a **pixel-perfect authentication system** built using **React + Vite + TypeScript**, implementing JWT-based login and registration as per the design shared in the qualifier task.

Hosted on: [🔗 View Live Demo](https://reactauthassignment.netlify.app/)  
GitHub Repository: [📁 View Code on GitHub](https://github.com/Amit7976/ReactAuthAssignment)

---

## 📋 Task Requirements (Fulfilled ✅)

> **Qualifier task for interview**  
> You need to code for the given design in React JS and share the code on a GitHub repository and host the project on Netlify or any hosting services.

### ✅ Delivered:
- 🔳 **Design Pixel-perfect** (as per [Adobe XD Design](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd))
- ⚙️ **Clean, modular, and well-formatted code**
- 📱 **Mobile interface centered and responsive**
- 🔁 **Seamless navigation between pages**
- ☁️ **Hosted on Netlify/Vercel**
- 🧪 **JWT authentication implemented**
- 💾 **Session-based token and user storage**
- 📁 **Users data handled via local JSON file**

---

## ⚙️ Tech Stack

- **React + Vite + TypeScript**
- **React Router DOM** – for routing between pages
- **JWT** – for token-based authentication (handled on the client-side using `jwt-simple`)
- **React Icons** – for iconography
- **Session Storage** – to store auth tokens and current user info
- **Local JSON** – used as a stand-in for a real database (`data/users.json`)

---

## 🗂️ Folder Structure

```
src/
├── auth/
│ ├── Auth.tsx # Parent auth component
│ ├── Login.tsx # Login page with JWT token generation
│ ├── Register.tsx # Registration page (writes to local JSON)
│ └── Profile.tsx # Protected profile page with token validation
│
├── data/
│ └── users.json # Stores initially registered users (used for login/register)
│
├── utils/
│ └── auth.ts # Token generation & verification helpers
│
└── App.tsx # Routes and layout setup

```

---

## 🔐 Authentication Flow

- Upon registration, user data is saved in `data/users.json` (simulating a backend).
- On login, credentials are verified against this JSON file.
- If valid, a **JWT token is generated** using `jwt-simple` and stored in `sessionStorage`.
- On visiting the profile page, the token is validated to grant access.
- Token expiration and invalidation are also handled gracefully.

---

## 🚀 How to Run Locally

```bash

git clone https://github.com/Amit7976/ReactAuthAssignment
cd simple-auth-react
npm install
npm run dev

```
📝 Notes
Since this is a frontend-only simulation, writing to the data/users.json file won't persist across reloads without backend logic. It's used for demonstration only.

If using this in production, ensure that JWTs are stored in HttpOnly cookies for security, and user data is fetched/stored via an API backend.




## Amit Gupta

[🔗 Portfolio](https://portfolio-amit7976s-projects.vercel.app/)

📧 guptaamit60600@gmail.com