import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/countries';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT USER DATA',
    INCORRECT_AGE = 'INCORRECT AGE',
    INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
    NO_DATA = 'NO DATA',
    SERVER_ERROR = 'SERVER ERROR',
}

export interface Profile {
    id?: string;
    firstName?: string;
    lastName?: string;
    'age'?: number | string,
    'currency'?: Currency,
    'country'?: Country,
    'city'?: string;
    'username'?: string;
    'avatar'?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
