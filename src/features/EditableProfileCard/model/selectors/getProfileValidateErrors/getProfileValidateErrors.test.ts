import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'features/EditableProfileCard';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return correct username', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
