import { Router } from 'express';
import usersRouter from './routes/users/users.router';
import expensesRouter from './routes/expenses/expenses.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/expenses', expensesRouter);

export default routes;
