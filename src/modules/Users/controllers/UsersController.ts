import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import UpdateUserService from '../services/UpdateUserService';
import ShowUserService from '../services/ListOneUserService';

export default class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUser = new ShowUserService();

    const user = await showUser.execute({ id });

    return response.json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = listUser.execute();

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
    const { name, email, actived } = request.body;
    const { id } = request.params;
    const updateUser = new UpdateUserService();
    const user = await updateUser.execute({
      id,
      name,
      email,
      actived,
    });
    return response.json(user);
  }

  //Delete
}
