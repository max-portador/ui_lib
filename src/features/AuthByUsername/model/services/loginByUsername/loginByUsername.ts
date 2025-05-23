import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { setFeatureFlags } from '@/shared/lib/features';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<User>('/login', authData);
        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));
        setFeatureFlags(response.data.features);
        localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.id);
        localStorage.setItem(
            LOCAL_STORAGE_LAST_DESIGN_KEY,
            response.data?.features?.isAppRedesigned ? 'new' : 'old',
        );

        return response.data;
    } catch (e) {
        console.error(e);
        return rejectWithValue('error');
    }
});
