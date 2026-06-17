const Book = require('../models/books.model.js');


// Create a book
const addBook = async (req, res) => {
    try {
        const { title, author, price, isbn, publishedDate } = req.body;

        const exists = await Book.findOne({ isbn });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "The book with this ISBN already exists!"
            });
        }

        const book = await Book.create({
            title,
            author,
            price,
            isbn,
            publishedDate
        });

        res.status(201).json({
            success: true,
            data: book
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// Get a book 

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });

        }
        res.status(200).json({ success: true, data: book });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid ID' });
    }
};

// Update a book 
const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });


        }
        res.status(200).json({ success: true, data: book });


    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}



// Delete a book

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = { addBook, getAllBooks, getBookById, updateBook, deleteBook };