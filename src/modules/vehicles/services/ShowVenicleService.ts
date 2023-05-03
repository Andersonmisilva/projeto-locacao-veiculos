import { getCustomRepository } from 'typeorm';
import VehicleEntity from 'src/modules/vehicles/typeorm/entities/vehicles.entities';
import VehicleRepository from '../repositories/VehicleRepository';
import AppError from '@shared/errors/AppError';
import { v4 as uuidv4 } from 'uuid';

interface IRequestShow {
  id: string;
}

class ShowVehicleService {
  public async execute({ id }: IRequestShow): Promise<VehicleEntity> {
    const vehicleRepository = getCustomRepository(VehicleRepository);
    console.log('Cheguei aqui 1:');
    const vehicle = await vehicleRepository.findOne(id);
    console.log('Cheguei aqui 2:', id);
    if (!vehicle) {
      throw new AppError('Vehicle not found.');
    }

    console.log('Cheguei aqui apos a instancia:', vehicle);

    return vehicle;
  }
}

export default ShowVehicleService;
