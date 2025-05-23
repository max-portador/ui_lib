import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername.test', () => {
    test('should return correct username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Max',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('Max');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
