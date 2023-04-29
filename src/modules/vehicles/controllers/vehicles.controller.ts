import { Request, Response } from 'express';

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

  public async create(request: Request, response: Response): Promise<any> {
    return response.json({
      messagem: 'Estou aqui create',
    });
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
