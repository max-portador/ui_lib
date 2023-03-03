import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { ArticleSortFields } from 'entities/Article/model/consts/consts';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

const thunkState: DeepPartial<StateSchema> = {
    articlesPage: {
        view: ArticleView.SMALL,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
        sort: ArticleSortFields.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL,
    },
};

jest.mock('../../services/fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('Success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, thunkState);
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });
    test('fetchNextArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(
            fetchNextArticlesPage,
            {
                ...thunkState,
                articlesPage: {
                    ...thunkState.articlesPage,
                    isLoading: true,
                },
            },
        );
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('fetchNextArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(
            fetchNextArticlesPage,
            {
                ...thunkState,
                articlesPage: {
                    ...thunkState.articlesPage,
                    hasMore: false,
                },
            },
        );
        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
