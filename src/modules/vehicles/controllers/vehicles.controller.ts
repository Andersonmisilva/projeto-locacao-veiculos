import { Request, Response } from 'express';
import CreateVehicleService from '../services/CreateVehicleService';

export default class VehiclesController {
  public async show(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui show',
    });
  }

  public async index(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui index',
    });
  }

  public async listAll(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui listAll',
    });
  }

  public async create(request: Request, response: Response): Promise<> {
    const { brand, model, plate, year, price, mileage } = request.body;
    const createVehicleService = new CreateVehicleService();
    console.log('Estou aqui anterior a venicle');
    const vehicle = await createVehicleService.execute({
      id,
      brand,
      model,
      plate,
      year,
      price,
      mileage,
    });
    console.log('estou aqui', vehicle);
    return response.json(vehicle);
  }

  public async update(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui update',
    });
  }

  public async delete(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui delete',
    });
  }
}
