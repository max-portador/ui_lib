import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
