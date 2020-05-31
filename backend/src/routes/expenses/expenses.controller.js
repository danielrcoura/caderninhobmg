const Expense = require('./expense.model');
const Journey = require('../journey/journey.model');

exports.createExpense = async (req, res) => {
  const expense = new Expense(req.body);
  await Journey.findOneAndUpdate(
    { userId: req.user.id },
    {
      $inc: { currentExpenses: expense.value },
    }
  );

  expense.userId = req.user.id;
  await expense.save();
  res.send(expense);
};
