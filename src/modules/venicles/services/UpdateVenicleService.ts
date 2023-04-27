import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import Venicles from '../typeorm/entities/Venicles';
import { IUpdateVeniclesRequest } from '../interfaces/IUpdateVeniclesRequest';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';

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

    const vehicleWithUpdatedBrandAndModel =
      vehiclesRepository.findByBrandAndModel(brand, model);

    if (
      vehicleWithUpdatedBrandAndModel &&
      vehicleWithUpdatedBrandAndModel.id !== id
    ) {
      throw new AppError(
        'There is already a vehicle with this brand and model.',
      );
    }

    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.year = year;
    vehicle.price = price;
    vehicle.mileage = mileage;

    await vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVeniclesService;
