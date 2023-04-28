import { Router } from 'express';
import usersRouter from '@modules/Users/routes/users.routes';
import veniclesRouter from '@modules/venicles/routes/venicles.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/venicles', veniclesRouter);

export default routes;
