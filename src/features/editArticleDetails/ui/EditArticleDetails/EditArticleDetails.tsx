import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { useCanEditArticle } from '../../model/selectors/article';

interface EditArticleDetailsProps {
    className?: string;
}

const EditArticleDetails = memo((props: EditArticleDetailsProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useArticleDetailsData();
    const canEdit = useCanEditArticle();

    const { className } = props;

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [navigate, article?.id]);
    if (!canEdit) {
        return null;
    }
    return (
        <Button variant="outline" onClick={onEditArticle} className={className}>
            {t('Редактировать')}
        </Button>
    );
});

export { EditArticleDetails };
