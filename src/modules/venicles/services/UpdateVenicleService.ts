import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Venicles from '../typeorm/entities/Venicles';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';
import { IUpdateVeniclesRequest } from '../inferfaces/IRVenicles';

class UpdateVeniclesService {
  public async execute({
    id,
    brand,
    model,
    year,
    price,
    mileage,
  }: IUpdateVeniclesRequest): Promise<Venicles> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicle = await vehiclesRepository.findOne(id);

    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }

    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.price = price;
    vehicle.mileage = mileage;

    const updatedVehicle = await vehiclesRepository.save(vehicle);

    if (!updatedVehicle) {
      throw new AppError('Error updating vehicle.');
    }

    return updatedVehicle;
  }
}

export default UpdateVeniclesService;
