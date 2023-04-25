import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
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
