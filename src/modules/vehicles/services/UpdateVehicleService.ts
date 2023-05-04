import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import VehicleRepository from '../repositories/VehicleRepository';
import VehiclesEntity from '../typeorm/entities/vehicles.entities';

interface IUpdateVehicle {
  id: string;
  brand: string;
  model: string;
  plate: string;
  year: number;
  price: number;
  mileage: number;
}

class UpdateVehicleService {
  public async execute({
    id,
    brand,
    model,
    plate,
    year,
    price,
    mileage,
  }: IUpdateVehicle): Promise<VehiclesEntity> {
    const vehicleRepository = getCustomRepository(VehicleRepository);
    const vehicle = await vehicleRepository.findOne(id);

    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }

    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.plate = plate;
    vehicle.year = year;
    vehicle.price = price;
    vehicle.mileage = mileage;
    vehicle.updated_at = new Date();

    await vehicleRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVehicleService;
