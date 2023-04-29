import { Router } from 'express';
import usersRouter from '@modules/Users/routes/users.routes';
import vehiclesRouter from '../../../modules/vehicles/routes/vehicles.router';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/vehicles', vehiclesRouter);

export default routes;
