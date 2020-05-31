import { Router } from 'express';
import usersRouter from './routes/users/users.router';
import expensesRouter from './routes/expenses/expenses.router';
import journeyRouter from './routes/journey/journey.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/expenses', expensesRouter);
routes.use('/journey', journeyRouter);

export default routes;
