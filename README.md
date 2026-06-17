# 📚 Bookstore REST API

A RESTful API for managing a bookstore's inventory, built with **Node.js**, **Express.js**, and **MongoDB**. Supports full CRUD operations & input validation.

---

## 🛠️ Technologies Used

| Technology        | Purpose                         |
| ----------------- | ------------------------------- |
| Node.js           | JavaScript runtime              |
| Express.js        | Web framework & routing         |
| MongoDB           | NoSQL database                  |
| Mongoose          | MongoDB ODM (schema modeling)   |
| express-validator | Input validation (bonus)        |
| dotenv            | Environment variable management |
| nodemon           | Auto-restart during development |

---

## 📁 Project Structure

```
bookstore-api/
├── app.js                  # Entry point — Express app setup & server start
├── config/
│   └── db.config.js               # MongoDB connection
├── models/
│   └── books.model.js             # Mongoose schema & model
├── controllers/
│   └── Books.controller.js   # CRUD logic for all endpoints
├── routes/
│   └── books.routes.js       # Route definitions
├── middleware/
│    └──validate.js           # Input validation rules (express-validator)
│   
├── .env          # Environment variables template
├── .gitignore
└── package.json
```

---

## 🚀 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://www.mongodb.com/atlas) account

### 1. Clone the repository

```bash
git clone https://github.com/MuteebaIjaz/Backend-Internship-DHC-1121-bookstore-api.git
cd bookstore-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env .env
```

Edit `.env`:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
# Or for Atlas:
# MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/bookstore
```

### 4. Start the server

```bash
# Development (auto-restart with nodemon)
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:3000`

---

## 📋 API Endpoints

Base URL: `http://localhost:3000/books`

### Book Schema

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 15,
  "isbn": "9780062315007",
  "publishedDate": "1988-04-01"
}
```


## 🧪 Testing with Postman

1. Import the endpoints above into Postman
2. Set `Content-Type: application/json` for POST/PUT requests
3. Test each endpoint in order: Create → Read → Update → Delete

---



## 👤 Author

**Muteebaa**  
Backend Development Internship — Phase 2  

