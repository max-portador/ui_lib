import React, { memo } from 'react';
import { ArticleView } from '../../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemSkeletonRedesigned';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemSkeletonRedesigned {...props} />}
            off={<ArticleListItemSkeletonDeprecated {...props} />}
        />
    );
});

export { ArticleListItemSkeleton };
