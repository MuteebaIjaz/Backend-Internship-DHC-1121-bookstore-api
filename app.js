const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config.js');
const bookRoutes = require('./routes/books.routes.js');




dotenv.config();


const app = express();
app.use(express.json());
app.use('/books', bookRoutes);
app.use((req, res) => {
  res.status(404).json
  ({ success: false, 
    message: `Route not found : ${req.originalUrl}` });
});
const PORT = process.env.PORT || 3000;






connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});