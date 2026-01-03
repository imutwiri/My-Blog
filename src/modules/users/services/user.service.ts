import { Pool } from "mysql2/promise";

export class UserService {
    constructor(private pool: Pool) {}

    async createUser(data: any): Promise<any> {
        console.log(data);

        return data;
    }

    async getUserByID(id: number): Promise<any> {
        console.log(id);

        return id;
    }

    async getUserByEmail(email: string): Promise<any> {
        console.log(email);

        return email;
    }

    async updateUser(id: number, data: any): Promise<any> {
        console.log(id);
        console.log(data);

        return data;
    }
}