import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { SelectOption } from '@/shared/ui/Select';
import { Select } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortFields } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortFields,
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortFields) => void;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortFields>[]>(() => [
        {
            value: ArticleSortFields.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortFields.VIEWS,
            content: t('количеству просмотров'),
        },
        {
            value: ArticleSortFields.TITLE,
            content: t('названию'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortFields>
                label={t('Сортировать по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                data-testId="ArticleListSelector.sort"
            />
            <Select<SortOrder>
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
                data-testId="ArticleListSelector.order"
            />
        </div>
    );
});

export { ArticleSortSelector };
