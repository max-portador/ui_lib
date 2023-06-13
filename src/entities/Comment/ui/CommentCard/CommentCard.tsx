import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean
}

const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <VStack
                gap={8}
                max
                className={classNames(cls.CommentCard, {}, [className, cls.loading])}
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton width="100%" height={50} />
            </VStack>

        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap={8}
            max
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard.Content"
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user?.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text title={comment.user.username} />
            </AppLink>
            <Text text={comment.text} />
        </VStack>

    );
});

export { CommentCard };
