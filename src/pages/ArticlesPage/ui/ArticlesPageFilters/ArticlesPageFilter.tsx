import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/depricated/Input';
import { Card } from '@/shared/ui/depricated/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { ToggleFeatures } from '@/shared/lib/features';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
    className?: string;
}

const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        sort,
        order,
        search,
        typeTab,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeTab,
    } = useArticlesFilters();

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<div />}
                    off={<ViewSelectorContainer />}
                />
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
