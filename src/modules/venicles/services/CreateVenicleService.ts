import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Venicles from '../typeorm/entities/Venicles';
import ICreateVeniclesRequest from '../inferfaces/IRVenicles';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';

class CreateVeniclesService {
  public async execute({
    model,
    year,
    price,
  }: ICreateVeniclesRequest): Promise<Venicles> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicleExists = await vehiclesRepository.findOne({
      where: { model },
    });
    if (vehicleExists) {
      throw new AppError('Vehicle already exists.');
    }

    const vehicle = vehiclesRepository.create({
      model,
      year,
      price,
    });

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default CreateVeniclesService;
