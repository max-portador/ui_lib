import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articlesRecomendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecomendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            error,
            data: articles,
        } = useArticleRecommendationsList(4);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                gap={8}
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Рекомендуем')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                />

                <ArticleList
                    articles={articles}
                    target="_blank"
                    isLoading={isLoading}
                />
            </VStack>
        );
    },
);
