import Venicle from '@modules/venicles/typeorm/entities/Venicles';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Venicle)
class VenicleRepository extends Repository<Venicle> {
  public async findById(id: string): Promise<Venicle | undefined> {
    const venicle = await this.findOne(id);
    return venicle;
  }

  public async findAll(): Promise<Venicle[]> {
    const venicles = await this.find();
    return venicles;
  }

  public async createVenicle(data: Omit<Venicle, 'id'>): Promise<Venicle> {
    const venicle = this.create(data);
    await this.save(venicle);
    return venicle;
  }

  public async updateVenicle(
    id: string,
    data: Partial<Venicle>,
  ): Promise<Venicle | undefined> {
    const venicle = await this.findOne(id);
    if (!venicle) {
      return undefined;
    }
    const updatedVenicle = this.merge(venicle, data);
    await this.save(updatedVenicle);
    return updatedVenicle;
  }

  public async deleteVenicle(id: string): Promise<void> {
    await this.delete(id);
  }
}

export default VenicleRepository;
