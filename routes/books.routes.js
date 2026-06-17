const express = require('express');
const router = express.Router();

const {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} = require('../controllers/Books.controller.js');
const {bookValidationRules, validate} = require('../middleware/validate.js');

router.post('/',bookValidationRules, validate, addBook);
router.get('/', getAllBooks);
router.route('/:id')
.get(getBookById)
.put(updateBook)
.delete(deleteBook);

module.exports = router ; 