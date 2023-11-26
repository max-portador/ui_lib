import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewSelectorContainer.module.scss';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleView } from '@/entities/Article';
import { useArticlePageActions } from '../../model/slice/articlePageSlice';
import { getArticlesPageView } from '../../model/selectors/articlePageSelectors/articlePageSelectors';
import { useUpdateQueryParams } from '@/shared/lib/hooks/useUpdateQueryParams';

interface ViewSelectorContainerProps {
    className?: string;
}

const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
    const { className } = props;
    const { setView, setPage } = useArticlePageActions();
    const view = useSelector(getArticlesPageView);

    const { updateQueryParam } = useUpdateQueryParams();

    const onChangeView = useCallback(
        (view: ArticleView) => {
            setView(view);
            setPage(1);
            updateQueryParam({ view });
        },
        [setView, setPage, updateQueryParam],
    );

    return (
        <div className={classNames(cls.ViewSelectorContainer, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
    );
});

export { ViewSelectorContainer };
