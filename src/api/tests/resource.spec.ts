import { test, expect } from '../../fixtures';
import { User } from '../interfaces/User';

test.describe('resource api', () => {
    test('retrieve a resource', async ({ resourceApi }) => {
        const retrievedResourceResponce = await resourceApi.getResource('test');
        const retrievedResource = await retrievedResourceResponce.json();

        expect(retrievedResource.total).not.toBe(0);
        expect(retrievedResource.data.length).not.toBe(0);
    });
});
