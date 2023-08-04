import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import {
    ArticleSortFields,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticlePageActions } from '../../model/slice/articlePageSlice';
import {
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
    useArticlesPageOrder,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
    className?: string;
}

const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props;
    const { setView, setPage, setOrder, setSort, setSearch, setType } =
        useArticlePageActions();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useArticlesPageOrder();
    const search = useSelector(getArticlesPageSearch);
    const typeTab = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            setView(view);
            setPage(1);
            fetchData();
        },
        [setView, setPage, fetchData],
    );

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

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    data-testId="ArticleListSearch"
                />
            </Card>
            <ArticleTypeTabs
                value={typeTab}
                onChangeType={onChangeTab}
                className={cls.tabs}
            />
        </div>
    );
});

export { ArticlesPageFilter };
