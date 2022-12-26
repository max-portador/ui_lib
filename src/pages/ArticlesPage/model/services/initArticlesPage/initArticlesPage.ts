import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortFields } from 'entities/Article/model/types/article';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (searchParams, thunkApi) => {
            const {
                getState, dispatch,
            } = thunkApi;
            const _inited = getArticlesPageInited(getState());

            if (!_inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortFields;
                const searchFromUrl = searchParams.get('search');

                if (orderFromUrl) {
                    dispatch(articlePageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlePageActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlePageActions.setSearch(searchFromUrl));
                }

                dispatch(articlePageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
