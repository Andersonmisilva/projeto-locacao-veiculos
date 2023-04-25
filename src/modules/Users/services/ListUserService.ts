import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

class ListUserService {
  execute() {
    throw new Error('Method not implemented.');
  }
  public async listUsers(): Promise<User[]> {
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
