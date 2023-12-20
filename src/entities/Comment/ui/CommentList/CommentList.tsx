import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const { t } = useTranslation();

    const { className, comments, isLoading } = props;

    if (isLoading) {
        return (
            <VStack max className={className}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack max gap={16} className={className}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))
            ) : (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={t('Коментарии отсутствуют')} />}
                    off={<TextDeprecated text={t('Коментарии отсутствуют')} />}
                />
            )}
        </VStack>
    );
});

export { CommentList };
