import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
