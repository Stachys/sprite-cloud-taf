import { APIRequestContext, APIResponse } from 'playwright';
import { User } from '../interfaces/User';

export class UsersApi {
    private path = 'api/users';

    constructor(private readonly context: APIRequestContext) {}

    async getUsers(): Promise<APIResponse> {
        return this.context.get(this.path);
    }

    async createUser(data: User): Promise<APIResponse> {
        return this.context.post(this.path, { data });
    }
}
