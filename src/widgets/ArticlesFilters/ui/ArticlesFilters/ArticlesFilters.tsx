import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortFields, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';
import cls from './ArticlesFilters.module.scss';

interface ArticleFiltersProps {
    className?: string;
    sort: ArticleSortFields;
    order: SortOrder;
    search?: string | number;
    type: ArticleType;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortFields) => void;
    onChangeSearch?: (value: string) => void;
    onChangeType: (value: ArticleType) => void;
}

const ArticlesFilters = memo((props: ArticleFiltersProps) => {
    const { t } = useTranslation();

    const {
        className,
        type,
        search,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    } = props;
    return (
        <Card
            className={classNames(cls.ArticleFilters, {}, [className])}
            padding="24"
        >
            <VStack gap={32}>
                <Input
                    value={search}
                    size='s'
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                    data-testId="ArticleListSearch"
                    addonLeft={<Icon SVG={SearchIcon} width={15}/>}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
});

export { ArticlesFilters };
