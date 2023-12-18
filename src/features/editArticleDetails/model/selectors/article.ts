import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { buildSelector } from '@/shared/lib/store';

export const [useCanEditArticle, getCanEditArticle] = buildSelector(
    createSelector(getArticleDetailsData, getUserAuthData, (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    }),
);
