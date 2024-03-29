import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user = null;

    try {
      user = this.showUserProfileUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error });
    }

    return response.json(user);
  }
}

export { ShowUserProfileController };
