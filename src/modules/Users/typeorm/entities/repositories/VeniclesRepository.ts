import Vehicles from '@modules/venicles/typeorm/entities/Venicles';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Vehicles)
class VeniclesRepository extends Repository<Vehicles> {
  findByBrandAndModel(
    brand: ICreateVeniclesRequest,
    model: ICreateVeniclesRequest,
  ) {
    throw new Error('Method not implemented.');
  }
  public async findById(id: string): Promise<Vehicles | undefined> {
    const vehicle = await this.findOne(id);

    return vehicle;
  }
}

export default VeniclesRepository;
