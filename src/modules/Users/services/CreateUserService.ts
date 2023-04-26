import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/entities/repositories/UsersRepository';
import { hash } from 'bcryptjs';
import { ICreateRequest } from '../interfaces/IUser.interface';

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: ICreateRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const hashPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashPassword,
      actived: true,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
