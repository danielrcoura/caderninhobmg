const Expense = require('./expense.model');

exports.createExpense = async (req, res) => {
  const expense = new Expense(req.body);
  expense.userId = req.user.id;
  await expense.save();
  res.send(expense);
};
