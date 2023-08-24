import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '@/shared/lib/fetures/setGetFetures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    name,
    on,
    off,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
