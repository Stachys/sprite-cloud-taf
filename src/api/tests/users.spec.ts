import { test, expect } from '../../fixtures';
import { User } from '../interfaces/User';

test.describe('users api', () => {
    test('create a user', async ({ usersApi }) => {
        const userData: User = {
            email: 'john.doe@email.com',
            first_name: 'John',
            last_name: 'Doe',
            avatar: 'https://example.com/avatar.jpg',
        };

        const createdUserResponse = await usersApi.createUser(userData);
        const createdUser = await createdUserResponse.json();

        for (const key in userData) {
            expect(createdUser[key]).toEqual(userData[key]);
        }
    });

    test('retrieve all users', async ({ usersApi }) => {
        const retrievedUsersResponse = await usersApi.getUsers();
        const retrievedUsers = await retrievedUsersResponse.json();

        expect(retrievedUsers.total).not.toBe(0);
        expect(retrievedUsers.data.length).not.toBe(0);
    });
});
