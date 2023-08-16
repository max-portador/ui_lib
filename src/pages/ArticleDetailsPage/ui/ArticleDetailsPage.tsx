import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/features/articleRating';
import { VStack } from '@/shared/ui/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ArticleRecommendationsList } from '@/features/articleRecomendationsList';
import { articleDetailsPageReducer } from '../model/slices';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';
import { getFeatureFlag } from '@/shared/lib/fetures';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;

    let { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    if (__PROJECT__ === 'storybook') {
        id = '1';
    }

    const reducers: ReducersList = {
        articlesDetailsPage: articleDetailsPageReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap={16} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id!} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
