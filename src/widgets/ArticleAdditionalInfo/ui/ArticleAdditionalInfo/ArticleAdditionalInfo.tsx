import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { EditArticleDetails } from '@/features/editArticleDetails';

interface ArticleAdditionalInfoProps {
    className?: string;
    author?: User;
    createdAt?: string;
    views: number;
}

const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation();

    const { className, author, createdAt, views } = props;
    return (
        <VStack gap={32} className={className}>
            <HStack gap={8}>
                <Avatar src={author?.avatar} size={32} />
                <Text text={author?.username} bold />
                <Text text={createdAt} bold />
            </HStack>
            <EditArticleDetails />
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
});

export { ArticleAdditionalInfo };
