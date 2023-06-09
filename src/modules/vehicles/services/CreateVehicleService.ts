import { getCustomRepository } from 'typeorm';
import VehicleEntity from '@modules/vehicles/typeorm/entities/vehicles.entities';
import VehicleRepository from '../repositories/VehicleRepository';
import { v4 as uuidv4 } from 'uuid';

interface IRequest {
  brand: string;
  model: string;
  plate: string;
  year: number;
  price: number;
  mileage: number;
}

class CreateVehicleService {
  public async execute({
    brand,
    model,
    plate,
    year,
    price,
    mileage,
  }: IRequest): Promise<VehicleEntity> {
    try {
      const vehiclesRepository = getCustomRepository(VehicleRepository);
      const id = uuidv4();
      const created_at = new Date();
      const updated_at = new Date();
      const vehicle = vehiclesRepository.create({
        brand,
        model,
        plate,
        year,
        price,
        mileage,
        created_at,
        updated_at,
      });
      await vehiclesRepository.save(vehicle);
      return vehicle;
    } catch (error: any) {
      console.log(`Erro: ${error.message}`);
      throw new Error(`Error saving vehicle: ${error.message}`);
    }
  }
}
export default CreateVehicleService;
