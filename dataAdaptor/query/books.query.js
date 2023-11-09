const mongoose=require('mongoose')
const ObjectId=require('mongoose').ObjectId;
const Book=require('../models/books');
class BookQuery{

    async saveBook(title,author, description) {
        try {
          const book = new Book({
            title,
            author,
            description
            
            
          });
          let saveBook = await book.save();
          return saveBook;
        } catch (err) {
          console.log(err);
        }
      }
      async getBook(title) {
        try {
          
          let getBook = await Book.findOne({title});

          return getBook?true:false;
        } catch (err) {
          console.log(err);
        }
      }
      async getBookByTitle(title){
        try {
          
          let getBook = await Book.findOne({title},{"_id":0,"__v":0});

          return getBook
        } catch (err) {
          console.log(err);
        }
      }

      



}

module.exports = new BookQuery();

