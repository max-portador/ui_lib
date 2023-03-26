import { loginActions, loginReducer } from './loginSlice';

import { LoginSchema } from '@/features/AuthByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('Max'),
        )).toEqual({ username: 'Max' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '45', username: 'Max' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ username: 'Max', password: '123' });
    });
});
