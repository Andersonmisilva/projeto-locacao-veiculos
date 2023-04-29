import { Router } from 'express';
import VehiclesController from '../controllers/vehicles.controller';

const vehiclesRouter = Router();
const vehiclesController = new VehiclesController();

vehiclesRouter.get('/', vehiclesController.show);
vehiclesRouter.get('/:id', vehiclesController.index);
vehiclesRouter.post('/', vehiclesController.create);
vehiclesRouter.put('/:id', vehiclesController.update);
vehiclesRouter.delete('/:id', vehiclesController.update);

export default vehiclesRouter;
