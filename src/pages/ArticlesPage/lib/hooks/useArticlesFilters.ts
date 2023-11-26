import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    useArticlesPageOrder,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import { useArticlePageActions } from '../../model/slice/articlePageSlice';
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortFields, ArticleType } from '@/entities/Article';

export const useArticlesFilters = () => {
    const { setPage, setOrder, setSort, setSearch, setType } =
        useArticlePageActions();
    const dispatch = useAppDispatch();

    const sort = useSelector(getArticlesPageSort);
    const order = useArticlesPageOrder();
    const search = useSelector(getArticlesPageSearch);
    const typeTab = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData);

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            setOrder(order);
            setPage(1);
            fetchData();
        },
        [setOrder, setPage, fetchData],
    );

    const onChangeSort = useCallback(
        (sortField: ArticleSortFields) => {
            setSort(sortField);
            setPage(1);
            fetchData();
        },
        [setSort, setPage, fetchData],
    );

    const onChangeSearch = useCallback(
        (newSearch: string) => {
            setSearch(newSearch);
            setPage(1);
            debouncedFetchData();
        },
        [setSearch, setPage, debouncedFetchData],
    );

    const onChangeTab = useCallback(
        (value: ArticleType) => {
            setType(value);
            setPage(1);
            fetchData();
        },
        [setType, setPage, fetchData],
    );

    return {
        sort,
        order,
        search,
        typeTab,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeTab,
    };
};
