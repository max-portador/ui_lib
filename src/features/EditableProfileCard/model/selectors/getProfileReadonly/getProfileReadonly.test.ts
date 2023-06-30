import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileReadonly } from './getProfileReadonly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileReadonly.test', () => {
    test('should return correct username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: false },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
