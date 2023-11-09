const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const books = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
    },{timestamps:true});
    
    books.index({
      'title': 1,
    });
    
    // exporting the entire module
    module.exports = mongoose.model('book', books);