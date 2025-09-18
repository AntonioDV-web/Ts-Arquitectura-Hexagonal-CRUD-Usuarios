import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserEdit {
  constructor(private repository: UserRepository) {}

  async exec(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserCreatedAt(createdAt)
    );

    const userExists = await this.repository.getById(user.id);

    if(!userExists) throw new UserNotFoundError("Usuario no encontrado!")

    return this.repository.edit(user);
  }
}
