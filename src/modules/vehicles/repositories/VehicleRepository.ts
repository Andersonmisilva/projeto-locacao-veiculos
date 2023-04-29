import { EntityRepository, Repository } from 'typeorm';
import VehicleEntity from 'src/modules/vehicles/typeorm/entities/vehicles.entities';


@EntityRepository(VehicleEntity)
export default class VehicleRepository extends Repository<VehicleEntity> {
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
    }): Promise<VehicleEntity | null> {
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
}
