import { EntityState } from '@reduxjs/toolkit';

import {
    Article,
    ArticleSortFields,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;
    _inited: boolean;
    // filters
    order: SortOrder;
    sort: ArticleSortFields;
    search: string;
    type: ArticleType;
}
