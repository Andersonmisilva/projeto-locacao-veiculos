import { getCustomRepository } from 'typeorm';
import VehicleEntity from '@modules/vehicles/typeorm/entities/vehicles.entities';
import VehicleRepository from '../repositories/VehicleRepository';
import AppError from '@shared/errors/AppError';
import { v4 as uuidv4 } from 'uuid';

interface IRequestShow {
  id: string;
}

class ShowVehicleService {
  public async execute({ id }: IRequestShow): Promise<VehicleEntity> {
    const vehicleRepository = getCustomRepository(VehicleRepository);
    const vehicle = await vehicleRepository.findOne(id);
    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }
    return vehicle;
  }
}

export default ShowVehicleService;
