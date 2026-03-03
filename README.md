<img width="959" height="440" alt="4" src="https://github.com/user-attachments/assets/2284fd20-b6b7-4f28-a83c-3cc882676e96" /><img width="959" height="439" alt="3" src="https://github.com/user-attachments/assets/a2594e33-da55-4740-b40b-52172465a594" />🚀 MERN Authentication System

A secure, full-stack authentication system built using the MERN Stack (MongoDB, Express, React, Node.js).
This project implements modern authentication practices including OTP verification, JWT-based login, password reset, protected routes, and secure session management.
Designed with scalability, security, and clean architecture in mind.

✨ Key Features

🔐 User Registration (Email & Phone Number)
📩 OTP Verification (Email + SMS Support)
🔑 Secure Login System using JWT
🔄 Password Reset Functionality
🛡️ Protected Routes with Authentication Middleware
🍪 Session Management with HTTP-Only Cookies
✅ Auto Deletion of Unverified Accounts (Cron Job)
📱 Fully Responsive UI (React)
📝 Form Validation using React Hook Form
🔔 Real-Time Toast Notifications

🛠️ Tech Stack
🎨 Frontend

React 18
React Router DOM
Axios
React Hook Form
React Toastify
Vite

⚙️ Backend

Node.js
Express.js
MongoDB + Mongoose
JWT (JSON Web Tokens)
Bcrypt (Password Hashing)
Nodemailer (Email Service)
Twilio (SMS & Email OTP "User choose that")
Node-cron (Scheduled Jobs)

Cookie Parser
CORS

📁 Project Structure

All_Authentication-in-Mern/
├── BackEnd/
│   ├── Auto/                 # Cron jobs (remove unverified accounts)
│   ├── Connection/           # Database connection
│   ├── Controllers/          # Route controllers
│   ├── Middleware/           # Authentication & error middleware
│   ├── Model/                # Mongoose models
│   ├── Routes/               # API routes
│   ├── Utils/                # Utility functions (email, SMS)
│   ├── index.js              # Entry point
│   ├── package.json
│   ├── vercel.json           # Vercel deployment config
│   └── .env                  # Environment variables
│
├── frontEnd/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── styles/           # CSS files
│   │   ├── lib/              # Axios instance
│   │   ├── App.jsx           # Main App component
│   │   └── main.jsx          # Entry point
│   ├── public/               # Static assets
│   ├── package.json
│   ├── vercel.json           # Vercel deployment config
│   └── .env                  # Environment variables
│
├── .gitignore
└── README.md

🔒 Security Features

* Passwords hashed with bcrypt
* JWT tokens stored in HTTP-only cookies
* CORS protection
* Input validation and sanitization
* Protection against common vulnerabilities
* Secure password reset with time-limited tokens
* Auto-removal of unverified accounts after 24 hours

📁 Project Picture
<img width="959" height="439" alt="3" src="https://github.com/user-attachments/assets/8d310227-f07f-45c4-9124-3603c8a0e3cb" />
<img width="959" height="440" alt="4" src="https://github.com/user-attachments/assets/bebb9f21-baf5-4a04-9e62-c55c35aae0af" />
<img width="955" height="439" alt="5" src="https://github.com/user-attachments/assets/69a09670-876b-48c0-b4b5-8f5e484e51c1" />
<img width="714" height="341" alt="6" src="https://github.com/user-attachments/assets/4e7a9d5d-b4a1-4448-b3ae-9479331089c3" />
<img width="960" height="437" alt="7" src="https://github.com/user-attachments/assets/91ecf76f-d613-4fe0-9016-7c29da360521" />
<img width="959" height="439" alt="8" src="https://github.com/user-attachments/assets/4b34cfc1-d324-4a70-824b-8ed13fd1ad6b" />
<img width="959" height="439" alt="9" src="https://github.com/user-attachments/assets/da2f4358-61fb-42eb-8900-de98925b1d3d" />
<img width="960" height="441" alt="10" src="https://github.com/user-attachments/assets/fb1568b8-9663-40c3-a1cb-f3f91e982d98" />
