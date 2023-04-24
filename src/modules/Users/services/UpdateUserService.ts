import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateUserService {
  public async execute({ id, name, email }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    // Essa parte não existe, pois vc já verifica se existe o ID ou não.
    // const userExists = await usersRepository.findByName(name);

    // if (!userExists) {
    //   throw new AppError('There is already one user with this name');
    // }

    user.name = name;
    user.email = email;
    user.updated_at = new Date();

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
