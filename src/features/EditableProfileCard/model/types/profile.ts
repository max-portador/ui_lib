import { Country } from '@/entities/Country/model/types/countries';
import { Currency } from '@/entities/Currency/model/types/currency';
import { ValidateProfileError } from '../consts/consts';

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
