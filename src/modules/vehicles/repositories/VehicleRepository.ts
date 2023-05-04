import { EntityRepository, Repository } from 'typeorm';
import VehicleEntity from '@modules/vehicles/typeorm/entities/vehicles.entities';

@EntityRepository(VehicleEntity)
export default class VehicleRepository extends Repository<VehicleEntity> {
  async findAll(): Promise<VehicleEntity[]> {
    return await this.find();
  }

  async createVehicle(vehicleData: {
    brand: string;
    model: string;
    plate: string;
    year: number;
    price: number;
    mileage: number;
  }): Promise<VehicleEntity> {
    const { brand, model, plate, year, price, mileage } = vehicleData;
    const vehicle = this.create({ brand, model, plate, year, price, mileage });
    await this.save(vehicle);
    return vehicle;
  }

  async updateVehicle(
    vehicleId: string,
    vehicleData: {
      brand: string;
      model: string;
      plate: string;
      year: number;
      price: number;
      mileage: number;
    },
  ): Promise<VehicleEntity | null> {
    const { brand, model, plate, year, price, mileage } = vehicleData;
    const vehicle = await this.findOne(vehicleId);
    if (!vehicle) {
      return null;
    }
    vehicle.brand = brand;
    vehicle.model = model;
    vehicle.plate = plate;
    vehicle.year = year;
    vehicle.price = price;
    vehicle.mileage = mileage;
    await this.save(vehicle);
    return vehicle;
  }

  async findOneVehiclePlate(plate: string): Promise<VehicleEntity | null> {
    const result = await this.findOne({ where: { plate } });
    return result || null;
  }
}
