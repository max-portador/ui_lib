import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/depricated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/depricated/AppLink';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { getRouteProfile } from '@/shared/const/router';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                gap={8}
                max
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" border="light-round" max>
                    <VStack
                        gap={8}
                        max
                        className={className}
                        data-testid="CommentCard.Content"
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap={8}>
                                {comment.user?.avatar && (
                                    <Avatar
                                        size={30}
                                        src={comment.user.avatar}
                                    />
                                )}
                                <Text title={comment.user.username} />
                            </HStack>
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    gap={8}
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                    data-testid="CommentCard.Content"
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user?.avatar && (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        )}
                        <TextDeprecated title={comment.user.username} />
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment.text} />
                </VStack>
            }
        />
    );
});

export { CommentCard };
