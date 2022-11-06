import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const formData = getProfileForm(getState());

            const isNumber = formData?.age?.toString()?.match(/^\d+$/);
            if (!isNumber) {
                return rejectWithValue('Укажите валидное значение возраста');
            }

            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    },
);
