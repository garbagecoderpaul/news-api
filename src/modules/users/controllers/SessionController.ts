import { Request, Response } from 'express';
import CreateSessionsService from '../service/CreateSessionService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = new CreateSessionsService();

    const { user, token } = await createSession.execute({
      email,
      password,
    });

    return res.json({ user, token });
  }
}
