import { Router } from 'express';
import userRouter from './routes/users/users.router';

const routes = Router();

routes.use('/users', userRouter);

export default routes;
