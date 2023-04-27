import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';
import Vehicles from 'src/modules/venicles/typeorm/entities/Venicles';

interface IRequest {
  id: string;
}

class ShowVeniclesService {
  public async execute({ id }: IRequest): Promise<Vehicles> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicle = await vehiclesRepository.findOne(id);

    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }

    return vehicle;
  }
}

export default ShowVeniclesService;
