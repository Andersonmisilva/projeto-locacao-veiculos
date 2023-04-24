import { EntityRepository, In, Repository } from 'typeorm';
import User from '../typeorm/entities/User';

interface IfindUser {
  id: string;
}

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByName(name: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        name,
      },
    });

    return user;
  }

  public async findAllByIds(User: IfindUser[]): Promise<User[]> {
    const usersIds = User.map(User => User.id);

    const existentUsers = await this.find({
      where: {
        id: In(usersIds),
      },
    });

    return existentUsers;
  }
}

export default UsersRepository;
