import React, { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text } from '@/shared/ui/depricated/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
} from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import { getArticles } from '../../model/slice/articlePageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();
    const view = searchParams.get('view') === 'BIG' ? 'BIG' : 'SMALL';

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text text={t('Ошибка при загрузке списка статей')} />;
    }

    return (
        <ArticleList
            className={className}
            articles={articles}
            isLoading={isLoading}
            view={view}
        />
    );
});

export { ArticleInfiniteList };
