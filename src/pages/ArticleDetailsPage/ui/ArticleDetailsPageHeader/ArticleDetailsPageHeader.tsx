import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCanEditArticle } from '@/features/editArticleDetails';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { useArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useCanEditArticle();
        const article = useArticleDetailsData();

        const { className } = props;

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article?.id) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [navigate, article?.id]);

        return (
            <HStack max justify="between" className={className}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);

export { ArticleDetailsPageHeader };
