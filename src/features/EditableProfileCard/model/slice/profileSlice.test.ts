import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profile';

import { profileActions, profileReducer } from './profileSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '@/features/EditableProfileCard/model/consts/consts';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastName: 'Matveev',
    firstName: 'Ignat',
    currency: Currency.RUB,
    city: 'default-1',

};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {};

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({ readonly: true, validateErrors: undefined });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ username: 'Timur' }),
        )).toEqual({ form: { username: 'Timur' } });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error',
            validateErrors: [ValidateProfileError.NO_DATA],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
