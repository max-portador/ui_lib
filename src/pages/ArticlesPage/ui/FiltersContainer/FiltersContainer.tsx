import React, { memo } from 'react';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

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
        <ArticlesFilters
            className={className}
            sort={sort}
            order={order}
            search={search}
            type={typeTab}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeTab}
        />
    );
});

export { FiltersContainer };
