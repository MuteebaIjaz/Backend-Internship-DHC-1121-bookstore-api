const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Username is required'],
        trim : true,
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        trim : true,
         
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    isbn: {
        type: String,
        required: [true, 'IS-Book Number is required'],
        unique: true,
        trim : true,


    },
    publishedDate: {
        type: Date,
        required: true
    }
}
    , {
        timestamps: true,
    }
);
module.exports = mongoose.model('Book', bookSchema);