const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('Connected on database caderninho_bmg...');
    })
    .catch((err) => {
      console.log('Error connecting to the database' + err);
    });

  mongoose.set('useCreateIndex', true);
};
