import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    updateFeatureFlagsMutations,
    UpdateFeatureFlagsOptions,
} from '@/shared/lib/features/api/featuresFlagApi';
import { getAllFeatureFlag } from '@/shared/lib/features/lib/setGetFetures';

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async ({ userId, features: newFeatures }, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const features = getAllFeatureFlag();

        try {
            await dispatch(
                updateFeatureFlagsMutations({
                    userId,
                    features: { ...features, ...newFeatures },
                }),
            );

            window.location.reload();
        } catch (e) {
            console.log(e);
            rejectWithValue('');
        }
    },
);
