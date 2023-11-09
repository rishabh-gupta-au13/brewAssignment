const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});
mongoose.set('debug',true)


module.exports = mongoose;