import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return correct username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: false },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
