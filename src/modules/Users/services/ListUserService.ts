import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<any> {
    const userRepository = getCustomRepository(UsersRepository);
    const users = await userRepository.find({
      where: {
        actived: true,
      },
    });

    return users;
  }
}
export default ListUserService;
