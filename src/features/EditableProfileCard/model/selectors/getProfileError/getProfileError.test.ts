import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileError } from './getProfileError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileError.test', () => {
    test('should return correct username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: '123' },
        };

        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
