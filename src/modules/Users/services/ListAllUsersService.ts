import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

class ListAllUsersService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return users;
  }
}

export default ListAllUsersService;
