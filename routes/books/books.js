const express = require('express');
const app = express.Router();

const bookService=require('../../services/books/books.controller');
const bookValidator=require('../../middleware/validation/books/books')




app.post('/',bookValidator.validateAddBook,bookService.addBook)

module.exports = app;