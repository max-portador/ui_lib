import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageInited } from '../../selectors/articlePageSelectors/articlePageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortFields } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortFields;
        const searchFromUrl = searchParams.get('search');
        const viewFromUrl =
            searchParams.get('view') === 'BIG' ? 'BIG' : 'SMALL';

        if (orderFromUrl) {
            dispatch(articlePageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlePageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(articlePageActions.setSearch(searchFromUrl));
        }

        if (viewFromUrl) {
            dispatch(articlePageActions.setView(viewFromUrl));
        }

        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
