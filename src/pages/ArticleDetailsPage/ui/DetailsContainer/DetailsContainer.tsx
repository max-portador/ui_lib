import React, { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
    children?: ReactNode;
}

const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    const { className, children } = props;
    return (
        <Card max className={className} padding="24" border="round">
            <ArticleDetails id={id} />
        </Card>
    );
});

export { DetailsContainer };
