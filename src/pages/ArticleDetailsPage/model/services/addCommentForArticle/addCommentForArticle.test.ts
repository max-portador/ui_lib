import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { article } from 'shared/config/storybook/examples/article';
import { userExamples } from 'shared/config/storybook/examples/users';
import { addCommentForArticle } from './addCommentForArticle';

const thunkState: DeepPartial<StateSchema> = {
    articleDetails: {
        data: article, // ArticleId = '1'
        isLoading: false,
    },

    user: {
        authData: userExamples[1],
    },

};

describe('addCommentForArticle.test', () => {
    test('200 Status', async () => {
        const comment = {
            text: 'Test_message',
            id: '1',
            user: { id: '1', username: 'test_user' },
        };

        const thunk = new TestAsyncThunk(addCommentForArticle, thunkState);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
        const result = await thunk.callThunk('Test_message');

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    });

    test('Without text', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, thunkState);
        thunk.api.post.mockReturnValue(Promise.resolve(''));
        const result = await thunk.callThunk('');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });

    test('Without article', async () => {
        const thunkStateWithoutArticle: DeepPartial<StateSchema> = {
            user: {
                authData: userExamples[1],
            },
        };
        const thunk = new TestAsyncThunk(
            addCommentForArticle,
            thunkStateWithoutArticle,
        );
        thunk.api.post.mockReturnValue(Promise.resolve(''));
        const result = await thunk.callThunk('Text');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });

    test('Without user', async () => {
        const thunkStateWithoutUser: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article, // ArticleId = '1'
                isLoading: false,
            },
        };
        const thunk = new TestAsyncThunk(
            addCommentForArticle,
            thunkStateWithoutUser,
        );
        thunk.api.post.mockReturnValue(Promise.resolve(''));
        const result = await thunk.callThunk('Text');

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });
});
