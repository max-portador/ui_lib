import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/RatingCard';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRating, useRateArticle } from '@/features/articleRating/api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId?: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId: articleId ?? '',
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();
    const handleRateArticleMutation = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId: articleId ?? '',
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticleMutation(starsCount, feedback);
    }, [handleRateArticleMutation]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticleMutation(starsCount);
    }, [handleRateArticleMutation]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;
