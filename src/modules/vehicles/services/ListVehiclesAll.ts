import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import VehicleRepository from '../repositories/VehicleRepository';

export default class VehicleController {
  async index(request: Request, response: Response) {
    const vehiclesRepository = getCustomRepository(VehicleRepository);
    const vehicles = await vehiclesRepository.find();

    return response.json(vehicles);
  }
}
