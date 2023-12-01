import { type ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../../lib/setGetFetures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export function ToggleFeatures(props: ToggleFeaturesProps) {
    const { feature, on, off } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
}
