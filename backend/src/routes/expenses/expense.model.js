const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
  },
  userId: {
    type: String,
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
