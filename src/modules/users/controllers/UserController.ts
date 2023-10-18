import { Request, Response } from 'express';
import ListUserService from '../service/ListUserService';
import CreateUserService from '../service/CreateUserService';

export default class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      username,
      email,
      password,
    });

    return res.json(user);
  }
}
