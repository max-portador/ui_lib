import { Profile } from '../../types/profile';

import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (
    profile?: Profile,
): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { firstName, lastName, age, country } = profile;
    const errors: ValidateProfileError[] = [];

    if (!firstName || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(Number(age)) || Number(age) < 1) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
