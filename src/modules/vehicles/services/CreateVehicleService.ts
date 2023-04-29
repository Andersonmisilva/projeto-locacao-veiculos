import { getCustomRepository } from 'typeorm';
import VehicleEntity from 'src/modules/vehicles/typeorm/entities/vehicles.entities';
import VehicleRepository from '../repositories/venicleRepository';


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
    const vehiclesRepository = getCustomRepository(VehicleRepository);

    const vehicle = await vehiclesRepository.createVehicle({
      brand,
      model,
      plate,
      year,
      price,
      mileage,
    });

    return vehicle;
  }
}

export default CreateVehicleService;
