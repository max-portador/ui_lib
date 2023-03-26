import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.isLoading;
};

export const getArticleDetailsCommentsError = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.error;
};
