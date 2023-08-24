import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { User } from '../types/user';
import { getUserDataByIdQuery } from '@/entities/User/api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('no userId');
        }
        try {
            const user = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            if (!user) {
                return rejectWithValue('no user from server');
            }

            return user;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    },
);
