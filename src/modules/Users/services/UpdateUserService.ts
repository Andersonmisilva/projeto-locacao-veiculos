import AppError from '@shared/errors/AppError';
import { getCustomRepository, getRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  actived: boolean;
}

class UpdateUserService {
  public async execute({ id, name, email, actived }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    user.name = name;
    user.email = email;
    user.actived = actived;
    user.updated_at = new Date();

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
