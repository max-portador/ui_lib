import { DeepPartial } from '@reduxjs/toolkit';

import { getProfileData } from './getProfileData';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData.test', () => {
    test('should return correct username', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastName: 'Matveev',
            firstName: 'Ignat',
            currency: Currency.EUR,
            city: 'default-1',
        };
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
