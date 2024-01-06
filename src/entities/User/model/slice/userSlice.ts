import { PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';
import type { User, UserSchema } from '../types/user';
import type { JsonSettings } from '../types/jsonSettings';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, { payload }: PayloadAction<JsonSettings>) => {
                    if (state.authData) {
                        state.authData.jsonSettings = payload;
                    }
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                state._inited = true;
            })
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<User>) => {
                    state.authData = payload;
                    setFeatureFlags(payload.features);
                    state._inited = true;
                },
            );
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
export const { useActions: useUserActions } = userSlice;
