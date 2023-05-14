export { createReduxStore } from './config/store';

export { default as StoreProvider } from './ui/StoreProvider';
export type {
    ReduxStoreWithManager, StateSchema, StateSchemaKey, ThunkConfig,
} from './config/StateSchema';
export type { AppDispatch } from './types/types';
