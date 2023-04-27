import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';

class DeleteVeniclesService {
  public async execute(id: string): Promise<void> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicle = await vehiclesRepository.findOne(id);

    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }

    await vehiclesRepository.remove(vehicle);
  }
}

export default DeleteVeniclesService;
