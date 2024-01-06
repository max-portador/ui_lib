import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    updateFeatureFlagsMutations,
    UpdateFeatureFlagsOptions,
} from '@/shared/lib/features/api/featuresFlagApi';
import {
    getAllFeatureFlag,
    setFeatureFlags,
} from '@/shared/lib/features/lib/setGetFetures';

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>(
    'features/saveJsonSettings',
    async ({ userId, features: newFeatures }, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const features = getAllFeatureFlag();

        const allFeatures = { ...features, ...newFeatures };

        try {
            await dispatch(
                updateFeatureFlagsMutations({
                    userId,
                    features: allFeatures,
                }),
            );
            setFeatureFlags(allFeatures);
            window.location.reload();
            return;
        } catch (e) {
            console.log(e);
            rejectWithValue('');
        }
    },
);
