import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'entities/Article';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: NavigateFunction,
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}
