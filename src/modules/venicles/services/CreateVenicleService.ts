import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Venicles from '../typeorm/entities/Venicles';
import { ICreateVeniclesRequest } from '../interfaces/ICreateVeniclesRequest';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';

class CreateVeniclesService {
  public async execute({
    brand,
    model,
    year,
    price,
    mileage,
  }: ICreateVeniclesRequest): Promise<Venicles> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicleExists = vehiclesRepository.findByBrandAndModel(brand, model);

    if (!vehicleExists) {
      throw new AppError('Vehicle already exists.');
    }

    const vehicle = await vehiclesRepository.create({
      brand,
      model,
      year,
      price,
      mileage,
    });

    vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default CreateVeniclesService;
