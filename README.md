# 🚀 AI Code Reviewer

> A modern AI-powered code review platform built with **React**, **TypeScript**, **Node.js**, **Express**, and **Google Gemini AI**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange)

---

## 📖 Overview

AI Code Reviewer is a full-stack web application that helps developers analyze and improve their source code using Google's Gemini AI.

Users can review, explain, debug, optimize, refactor, and perform security analysis on code written in multiple programming languages through an intuitive and responsive interface.

---

# ✨ Features

### 🤖 AI Code Review

- Overall Code Score
- Security Analysis
- Performance Analysis
- Readability Evaluation
- Best Practices Review
- Time Complexity Analysis
- Space Complexity Analysis
- Optimized Code Suggestions

---

### 📚 AI Code Explanation

- Step-by-step explanation
- Purpose of the program
- Important concepts
- Complexity analysis

---

### 🐞 AI Debugger

- Detects syntax errors
- Detects logical bugs
- Suggests fixes
- Generates corrected code

---

### ⚡ AI Optimizer

- Finds bottlenecks
- Suggests optimizations
- Improves runtime performance
- Cleaner implementation

---

### 🔒 AI Security Review

- Vulnerability detection
- Risk analysis
- Secure coding suggestions

---

### 🔄 AI Refactoring

- Cleaner code
- Better naming
- Improved maintainability
- SOLID-inspired recommendations

---

### 💻 Code Editor

- Monaco Editor
- Syntax Highlighting
- Multi-language support
- File Upload

---

### 📊 Dashboard

Displays AI-generated scores for:

- Overall
- Security
- Performance
- Readability
- Best Practices

---

### 📜 Review History

- Stores previous reviews
- Reload old analyses
- Local browser storage

---

### 📄 Export

- Copy AI Review
- Download Markdown Report

---

# 🖥️ Screenshots

> Add screenshots after deployment.

Example:

```
screenshots/home.png
screenshots/review.png
screenshots/dashboard.png
```

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Monaco Editor
- Framer Motion
- React Markdown
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- Google Gemini AI
- Axios
- dotenv

---

# 📂 Project Structure

```
AI-Code-Reviewer
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Code-Reviewer.git

cd AI-Code-Reviewer
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create:

```
backend/.env
```

Add:

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=8000
```

---

# 🌐 API Endpoint

```
POST /review
```

Request

```json
{
  "language": "javascript",
  "code": "function add(a,b){return a+b;}",
  "mode": "Review"
}
```

---

# 🎯 Supported AI Modes

- Review
- Explain
- Debug
- Optimize
- Security
- Refactor

---

# 💡 Future Improvements

- AI Chat Assistant
- GitHub Repository Review
- PDF Report Export
- Authentication
- Team Collaboration
- Cloud Deployment

---

# 👨‍💻 Author

**Aman Mishra**

Computer Science Engineering Student

ITER, Siksha 'O' Anusandhan University

GitHub:
https://github.com/am2623870-gif

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

# 📜 License

This project is licensed under the MIT License.
