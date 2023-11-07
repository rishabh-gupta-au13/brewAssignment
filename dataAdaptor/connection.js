const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rishabh123:rish123@cluster0.movzt.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});


module.exports = mongoose;