const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect('mongodb://localhost/caderninho_bmg', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected on database caderninho_bmg...');
    })
    .catch((err) => {
      console.log('Error connecting to the database' + err);
    });

  mongoose.set('useCreateIndex', true);
};
