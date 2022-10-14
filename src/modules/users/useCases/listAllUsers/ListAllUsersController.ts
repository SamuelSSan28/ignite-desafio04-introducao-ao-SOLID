import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    let users = [];

    if (Array.isArray(user_id)) {
      user_id = user_id[0];
    }
    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.json(users);
  }
}

export { ListAllUsersController };
