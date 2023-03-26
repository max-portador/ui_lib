import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValidateProfileError } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/profile';
import { validateProfileData } from '../validateProfile/validateProfileData';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const formData = getProfileForm(getState());
            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
