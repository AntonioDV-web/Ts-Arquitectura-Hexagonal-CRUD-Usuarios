import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class ExpressUserController {
  // GET ALL
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ServiceContainer.user.getAll.exec();
      return res.json(users.map(user => user.mapToPrimitive())).status(200);
    } catch (error) {
      next(error);
    }
  }

  // GET ID
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await ServiceContainer.user.getById.exec(req.params.id);

      res.status(200).json(user.mapToPrimitive());
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  // POST
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, createdAt } = req.body;
      await ServiceContainer.user.create.exec(
        id,
        name,
        email,
        new Date(createdAt)
      );
      return res.status(201).json(`Usuario con el ID: ${id} creado!`);
    } catch (error) {
      next(error);
    }
  }

  // PUT
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, createdAt } = req.body;
      await ServiceContainer.user.edit.exec(
        id,
        name,
        email,
        new Date(createdAt)
      );
      return res.status(201).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  // DELETE
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.user.delete.exec(req.params.id);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }
}
