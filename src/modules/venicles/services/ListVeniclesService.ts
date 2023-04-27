import { getCustomRepository } from 'typeorm';
import Vehicles from 'src/modules/venicles/typeorm/entities/Venicles';
import VeniclesRepository from '@modules/Users/typeorm/entities/repositories/VeniclesRepository';

class ListVeniclesService {
  public async execute(): Promise<Vehicles[]> {
    const vehiclesRepository = getCustomRepository(VeniclesRepository);

    const vehicles = await vehiclesRepository.find();

    return vehicles;
  }
}

export default ListVeniclesService;
