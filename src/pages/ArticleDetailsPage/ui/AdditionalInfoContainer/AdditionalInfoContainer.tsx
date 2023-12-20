import React, { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import {
    ArticleAdditionalInfo,
    ArticleAdditionalSkeletons,
} from '@/widgets/ArticleAdditionalInfo';
import {
    useArticleDetailsData,
    useArticleDetailsIsLoading,
} from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
    className?: string;
}

const AdditionalInfoContainer = memo((props: AdditionalInfoContainerProps) => {
    const article = useArticleDetailsData();
    const isLoading = useArticleDetailsIsLoading();
    const { className } = props;

    if (isLoading) {
        return (
            <Card padding="24" border="light-round" className={cls.card}>
                <ArticleAdditionalSkeletons className={className} />
            </Card>
        );
    }
    if (!article) {
        return null;
    }

    const { user, createdAt, views } = article;

    return (
        <Card padding="24" border="light-round" className={cls.card}>
            <ArticleAdditionalInfo
                author={user}
                createdAt={createdAt}
                views={views}
                className={className}
            />
        </Card>
    );
});

export { AdditionalInfoContainer };
