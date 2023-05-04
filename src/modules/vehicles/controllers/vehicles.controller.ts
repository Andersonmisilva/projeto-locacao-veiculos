import { Request, Response } from 'express';
import CreateVehicleService from '../services/CreateVehicleService';
import ShowVenicleService from '../services/ShowVenicleService';

import UpdateVehicleService from '../services/UpdateVehicleService';
import { getCustomRepository } from 'typeorm';
import VehicleRepository from '../repositories/VehicleRepository';

interface IVehicleCreate {
  brand: string;
  model: string;
  plate: string;
  year: number;
  price: number;
  mileage: number;
}

export default class venicleController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showVenicle = new ShowVenicleService();

    const user = await showVenicle.execute({ id });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui index',
    });
  }

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const vehiclesRepository = getCustomRepository(VehicleRepository);
    const vehicles = await vehiclesRepository.find();
    return response.json(vehicles);
  }

  public async create(request: Request, response: Response): Promise<any> {
    const { brand, model, plate, year, price, mileage } = request.body;
    const createVehicleService = new CreateVehicleService();
    const vehicle = await createVehicleService.execute({
      brand,
      model,
      plate,
      year,
      price,
      mileage,
    });
    return response.json(vehicle);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { brand, model, plate, year, price, mileage } = request.body;

    const updateVehicleService = new UpdateVehicleService();
    const updatedVehicle = await updateVehicleService.execute({
      id,
      brand,
      model,
      plate,
      year,
      price,
      mileage,
    });

    return response.json(updatedVehicle);
  }

  public async delete(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui delete',
    });
  }
}
