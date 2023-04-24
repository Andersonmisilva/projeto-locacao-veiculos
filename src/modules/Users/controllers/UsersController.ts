import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import ShowUserService from '../services/ShowUsersServices';
import UpdateProductService from '../services/UpdateUserService';
import User from '../typeorm/entities/User';
import UpdateUserService from '../services/UpdateUserService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ShowUser = new ShowUserService();

    const product = await ShowUser.execute({ id });

    return response.json(product);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateUser = new UpdateUserService();

    const User = await updateUser.execute({
      id,
      name,
      email,
    });

    return response.json(User);
  }
}
