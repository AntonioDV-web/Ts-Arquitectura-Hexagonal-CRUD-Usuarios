import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetAll {
  constructor(private repository: UserRepository) {}

  async exec(): Promise<User[]> {
    return this.repository.getAll();
  }
}
