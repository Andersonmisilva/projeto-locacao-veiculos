import { Request, Response } from 'express';
import CreateVehicleService from '../services/CreateVehicleService';
import ShowVehicleService from '../services/ShowVenicleService';

interface IVehicleCreate {
  brand: string;
  model: string;
  plate: string;
  year: number;
  price: number;
  mileage: number;
}

export default class VehiclesController {
  public async show(request: Request, response: Response): Promise<any> {
    const { plate } = request.params;
    const showVehicleService = new ShowVehicleService();
    const vehicle = await showVehicleService.execute({
      plate,
    });
  }

  public async index(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui index',
    });
  }

  public async listAll(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui listAll',
    });
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

  public async update(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui update',
    });
  }

  public async delete(request: Request, response: Response): Promise<any> {
    return response.json({
      message: 'Estou aqui delete',
    });
  }
}
