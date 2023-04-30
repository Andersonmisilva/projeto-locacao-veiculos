import { getCustomRepository } from 'typeorm';
import VehicleEntity from 'src/modules/vehicles/typeorm/entities/vehicles.entities';
import VehicleRepository from '../repositories/VehicleRepository';

interface IRequestShow {
  plate: string;
}

class ShowVehicleService {
  public async execute({ plate }: IRequestShow): Promise<VehicleEntity> {
    const vehiclesRepository = getCustomRepository(VehicleRepository);
    const vehicle = await vehiclesRepository.findOne({
      where: { plate },
    });
    if (!vehicle) {
      throw new Error('Vehicle not found');
    }
    return vehicle;
  }
}

export default ShowVehicleService;
