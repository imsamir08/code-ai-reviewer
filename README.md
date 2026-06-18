# 🚀 AI Code Reviewer

### Transforming Code Reviews with Generative AI

AI Code Reviewer is a full-stack web application that leverages Google's Gemini AI to automate code reviews, identify potential issues, suggest optimizations, and improve overall code quality.

The platform enables developers to securely register, authenticate, submit code, and receive detailed AI-powered feedback in real time.

---

## 🌟 Why This Project?

Manual code reviews are time-consuming and often delay development cycles.

This project demonstrates how Generative AI can accelerate software development by:

* Detecting code quality issues
* Suggesting performance improvements
* Encouraging industry best practices
* Improving code readability and maintainability
* Providing instant feedback to developers

---

## 🎥 Project Overview

### User Journey


User Registration
        ↓
Secure Authentication (JWT)
        ↓
Protected Dashboard Access
        ↓
Write / Paste Source Code
        ↓
Submit for Review
        ↓
Gemini AI Analysis
        ↓
Detailed Code Quality Report

---

## ✨ Key Features

### 🔐 Authentication System

* User Registration
* User Login
* JWT-Based Authentication
* Protected Routes
* Secure Password Hashing using bcrypt
* Persistent Sessions

---

### 🤖 AI-Powered Code Review

* Google Gemini Integration
* Intelligent Source Code Analysis
* Bug Detection
* Performance Recommendations
* Clean Code Suggestions
* Security Review
* Maintainability Feedback

---

### 💻 Interactive Developer Workspace

* Syntax Highlighting
* Code Editing Environment
* Markdown Rendering
* Real-Time Review Results
* Modern Responsive UI

---

### ☁️ Cloud Database Integration

* MongoDB Atlas
* User Management
* Secure Data Storage

---

## 🏗️ System Architecture

                    ┌─────────────────┐
                    │     React UI    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Express Server │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
 ┌──────────────┐  ┌────────────────┐  ┌─────────────────┐
 │ JWT Auth     │  │ MongoDB Atlas  │  │ Gemini AI API   │
 └──────────────┘  └────────────────┘  └─────────────────┘

---

## 🛠️ Technology Stack

### Frontend

| Technology     | Purpose             |
| -------------- | ------------------- |
| React.js       | User Interface      |
| React Router   | Client-side Routing |
| Axios          | API Communication   |
| PrismJS        | Syntax Highlighting |
| React Markdown | Review Rendering    |
| Vite           | Build Tool          |

---

### Backend

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Runtime Environment   |
| Express.js | REST APIs             |
| JWT        | Authentication        |
| bcryptjs   | Password Encryption   |
| dotenv     | Environment Variables |

---

### Database

| Technology    | Purpose        |
| ------------- | -------------- |
| MongoDB Atlas | Cloud Database |
| Mongoose      | ODM            |

---

### AI Layer

| Technology        | Purpose                |
| ----------------- | ---------------------- |
| Google Gemini API | Code Review & Analysis |

---

## 📂 Project Structure

Code_Reviewer/
│
├── Backend/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   │
│   │   ├── routes/
│   │   │   ├── ai.routes.js
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Review.js
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   └── app.js
│   │
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Fronted/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── History.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CodeEditor.jsx
│   │   │   └── ReviewPanel.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md


---

## 🔍 Core Functionalities Implemented

### Authentication Flow

Register
    ↓
Password Hashing
    ↓
MongoDB Storage
    ↓
Login
    ↓
JWT Generation
    ↓
Protected Dashboard Access

---

### AI Review Flow

Code Input
    ↓
Frontend Request
    ↓
Express API
    ↓
Gemini AI
    ↓
Analysis & Recommendations
    ↓
Rendered Markdown Response

---

## 📸 Screenshots

### Registration Page

<img width="1861" height="833" alt="image" src="https://github.com/user-attachments/assets/9f162323-b596-4bd6-aa62-ca31bc7c17d1" />

### Login Page

<img width="1891" height="856" alt="image" src="https://github.com/user-attachments/assets/9bc2ce41-5ea7-495d-b13b-058d6a987bc4" />

### Dashboard

<img width="1862" height="881" alt="image" src="https://github.com/user-attachments/assets/98a4655b-f1b7-44bd-b1bc-839baed83414" />


### AI Review Response

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5e3fcde1-2f71-4d01-a0e7-d99d143d187f" />


---

## 🔒 Security Considerations

* Password Hashing using bcrypt
* JWT-Based Authorization
* Protected Routes
* Environment Variable Management
* Secure MongoDB Atlas Integration

---

## 📈 Future Enhancements

* Multi-Language Code Review
* Review History Tracking
* Team Collaboration Features
* Export Reviews as PDF
* Dark/Light Theme Toggle
* AI Chat Assistant
* CI/CD Integration
* Review Analytics Dashboard

---

## 💡 What I Learned

This project strengthened my understanding of:

* Full Stack Development
* REST API Design
* Authentication & Authorization
* MongoDB Atlas
* Prompt Engineering
* LLM Integration
* React Architecture
* Express Middleware
* Secure Application Development

---

## 👨‍💻 Author

### Samir Kumar

B.Tech in Artificial Intelligence & Machine Learning

GitHub: https://github.com/imsamir08

LinkedIn: https://www.linkedin.com/in/samir-kumar-5b11a422b/

---

### ⭐ If you found this project interesting, please consider starring the repository.
