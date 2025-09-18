import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserDelete {
    constructor(private repository: UserRepository) {};

    async exec(id: string): Promise<void>{

        const userId = new UserId(id);
        const userExists = await this.repository.getById(userId);
        if(!userExists) throw new UserNotFoundError("User not Found!")

        return this.repository.delete(new UserId(id));
    }

}