import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import VeniclesController from '../controller/VeniclesController';

const veniclesRouter = Router();
const veniclesController = new VeniclesController();

veniclesRouter.get('/', veniclesController.index);

veniclesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      brand: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number().required(),
      price: Joi.number().required(),
      mileage: Joi.date(),
    },
  }),
  veniclesController.create,
);

veniclesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      brand: Joi.string().required(),
      model: Joi.string().required(),
      year: Joi.number().required(),
      price: Joi.number().required(),
      mileage: Joi.date(),
    },
  }),
  veniclesController.update,
);

veniclesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  veniclesController.show,
);

veniclesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  veniclesController.delete,
);

export default veniclesRouter;
