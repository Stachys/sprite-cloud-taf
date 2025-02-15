import { APIRequestContext, APIResponse } from 'playwright';

export class ResourceApi {
    constructor(private readonly context: APIRequestContext) {}

    async getResource(resource: string): Promise<APIResponse> {
        return this.context.get(`api/${resource}`);
    }
}
