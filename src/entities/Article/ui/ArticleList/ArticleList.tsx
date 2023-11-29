import React, { memo } from 'react';
import { ArticleListProps } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListRedesigned } from './redesigned/ArticleListRedesigned';
import { ArticleListDeprecated } from './deprecated/ArticleListDeprecated';

const ArticleList = memo((props: ArticleListProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListRedesigned {...props} />}
            off={<ArticleListDeprecated {...props} />}
        />
    );
});

export { ArticleList };
