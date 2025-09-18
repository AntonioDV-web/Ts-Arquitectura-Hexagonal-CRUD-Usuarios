import { User } from "../domain/User";
import { UserCreatedAt } from "../domain/UserCreatedAt";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserRepository } from "../domain/UserRepository";
import { createPool, Pool, RowDataPacket } from "mysql2/promise";

 
interface MySqlUserRow extends RowDataPacket {
  id: string;
  name: string;
  email: string;
  created_at: Date;
}

export class MySqlRepository implements UserRepository {
  client: Pool;

  constructor() {
    this.client = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      port: Number(process.env.DB_PORT),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async create(user: User): Promise<void> {
    const query = `INSERT INTO users (id, name, email, created_at) VALUES (?, ?, ?, ?)`;
    const values = [
      user.id.value,
      user.name.value,
      user.email.value,
      user.createdAt.value,
    ];
    
    await this.client.execute(query, values);
  }

  async getAll(): Promise<User[]> {
    const query = `SELECT * FROM users`;
    const [rows] = await this.client.execute<MySqlUserRow[]>(query);

    return rows.map(
      (row) =>
        new User(
          new UserId(row.id),
          new UserName(row.name),
          new UserEmail(row.email),
          new UserCreatedAt(row.created_at)
        )
    );
  }

  async getById(id: UserId): Promise<User | null> {
    const query = `SELECT * FROM users WHERE id = ?`;
    const [rows] = await this.client.execute<MySqlUserRow[]>(query, [id.value]);

    if (rows.length === 0) return null;

    const row = rows[0];
    return new User(
      new UserId(row.id),
      new UserName(row.name),
      new UserEmail(row.email),
      new UserCreatedAt(row.created_at)
    );
  }

  async edit(user: User): Promise<void> {
    const query = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    const values = [
      user.name.value,
      user.email.value,
      user.id.value,
    ];

    await this.client.execute(query, values);
  }

  async delete(id: UserId): Promise<void> {
    const query = `DELETE FROM users WHERE id = ?`;
    await this.client.execute(query, [id.value]);
  }

}