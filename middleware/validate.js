const {body , validationResult} = require('express-validator');


const bookValidationRules = [

body('title') 
.notEmpty().withMessage('Title is required')
.isString().withMessage('Title must be a string')
.trim(),
body('author') 
.notEmpty().withMessage('Author is required')
.isString().withMessage('Author must be a string')
.trim(),
body('price') 
.notEmpty().withMessage('Price is required')
.isFloat({min:0}).withMessage('Price must be a positive number')
.trim(),
body('isbn') 
.notEmpty().withMessage('ISBN is required')
.isString().withMessage('ISBN must be a string')
.trim(),
body('publishedDate') 
.notEmpty().withMessage('Published date is required')
.isISO8601().withMessage('Published date must be a valid date (YYYY-MM-DD)'),

];
const validate =  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            success : false,
            message :'Validation is failed',

        });
    }
    next();
};

module.exports = {bookValidationRules , validate}