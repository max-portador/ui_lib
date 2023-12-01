import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface NotificationListProps {
    className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });
    const { className } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack gap={16} max className={classNames('', {}, [className])}>
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack gap={16} max className={classNames('', {}, [className])}>
            {data?.map((item) => {
                return <NotificationItem key={item.id} item={item} />;
            })}
        </VStack>
    );
});

export { NotificationList };
