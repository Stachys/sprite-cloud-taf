import { test as base, expect, Page } from '@playwright/test';
import { UsersApi } from './api/endpoints/users';
import { ResourceApi } from './api/endpoints/Resource';

type MyFixtures = {
    standardUser: Page,
    usersApi: UsersApi,
    resourceApi: ResourceApi,
}

const test = base.extend<MyFixtures>({
    standardUser: async ({ page, baseURL }, use) => {
        setUserCookies(page, baseURL, 'standard_user');
        await use(page);
    },
  
    usersApi: async ({ request }, use) => {
        const usersApi = new UsersApi(request);
        await use(usersApi);
    },

    resourceApi: async ({ request }, use) => {
        const resourceApi = new ResourceApi(request);
        await use(resourceApi);
    },
})

async function setUserCookies(page: Page, baseURL: string | undefined, username: string) {
    const cookies = await page.context().cookies();
    const sessionUsernameCookies = cookies.find((c) => c.name === 'session-username');
    if (!sessionUsernameCookies || sessionUsernameCookies.value !== username) {
        await page.context().addCookies([
            { name: 'session-username', value: username, url: baseURL },
        ]);
    }
}

export { test, expect };
