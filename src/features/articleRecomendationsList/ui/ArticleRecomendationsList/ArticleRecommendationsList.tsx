import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articlesReccomendationsApi';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecomendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, error, data: articles } = useArticleRecommendationsList(4);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap={8} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
                isLoading={isLoading}
            />
        </VStack>
    );
});
