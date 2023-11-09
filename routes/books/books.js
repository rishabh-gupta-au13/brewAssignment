const express = require('express');
const app = express.Router();

const bookService=require('../../services/books/books.controller');
const bookValidator=require('../../middleware/validation/books/books')




app.post('/',bookValidator.validateAddBook,bookService.addBook);
app.get('/',bookValidator.validateGetBook,bookService.getBook);
app.patch('/',bookValidator.validateUpdateBook,bookService.updateBook);
app.delete('/',bookValidator.validateDeleteBook,bookService.deleteBook);

module.exports = app;