const { Router } = require('express');
const usersRouter = require('./routes/users/users.router');
const expensesRouter = require('./routes/expenses/expenses.router');
const journeyRouter = require('./routes/journey/journey.router');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/expenses', expensesRouter);
routes.use('/journey', journeyRouter);

module.exports = routes;
