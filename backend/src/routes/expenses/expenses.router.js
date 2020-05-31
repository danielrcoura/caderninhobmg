const express = require('express');
const expensesController = require('./expenses.controller');
const usersMiddlewares = require('../users/users.middlewares');

const router = express.Router();

router.post('/', usersMiddlewares.authorize, expensesController.createExpense);

module.exports = router;
