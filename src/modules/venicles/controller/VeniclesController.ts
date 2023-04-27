import { Request, Response } from 'express';
import CreateVeniclesService from 'src/modules/venicles/services/CreateVenicleService';
import DeleteVeniclesService from '../services/DeleteVeniclesService';
import UpdateVeniclesService from 'src/modules/venicles/services/UpdateVenicleService';
import ShowVeniclesService from '../services/ShowVeniclesService';
import ListVeniclesService from '../services/ListVeniclesService';

class VeniclesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listVenicles = new ListVeniclesService();

    const venicles = await listVenicles.execute();

    return response.json(venicles);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showVenicles = new ShowVeniclesService();

    const venicle = await showVenicles.execute({ id });

    return response.json(venicle);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { brand, model, year, price, mileage } = request.body;

    const createVenicles = new CreateVeniclesService();

    const venicle = await createVenicles.execute({
      brand,
      model,
      year,
      price,
      mileage,
    });

    return response.json(venicle);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { brand, model, year, price, mileage } = request.body;

    const updateVenicles = new UpdateVeniclesService();

    const venicle = await updateVenicles.execute({
      id,
      brand,
      model,
      year,
      price,
      mileage,
    });

    return response.json(venicle);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVenicles = new DeleteVeniclesService();

    await deleteVenicles.execute(id);

    return response.json({ message: 'Vehicle successfully deleted' });
  }
}

export default VeniclesController;
