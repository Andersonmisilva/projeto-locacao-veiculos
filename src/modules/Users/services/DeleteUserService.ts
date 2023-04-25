import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

class DeleteUserService {
  public async execute(id: string): Promise<any> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    user.actived = false;
    user.updated_at = new Date();

    return await usersRepository.save(user);
  }
}

export default DeleteUserService;
