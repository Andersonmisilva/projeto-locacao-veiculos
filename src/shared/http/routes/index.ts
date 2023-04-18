import usersRouter from '@modules/Users/routes/users.routes';
import { Router } from 'express';

const routes = Router();
routes.use('/users', usersRouter);

export default routes;
