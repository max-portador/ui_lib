import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortFields, ArticleType } from 'entities/Article/model/consts/consts';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean
    _inited: boolean;
    // filters
    order: SortOrder;
    sort: ArticleSortFields,
    search: string,
    type: ArticleType
}
