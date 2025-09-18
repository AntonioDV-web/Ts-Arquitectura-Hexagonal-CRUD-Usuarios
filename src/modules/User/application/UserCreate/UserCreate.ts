import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserRepository } from "../../domain/UserRepository";

export class UserCreate {
  constructor(private repository: UserRepository) {
    this.repository = repository;
  }

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

    return this.repository.create(user);
  }
}
