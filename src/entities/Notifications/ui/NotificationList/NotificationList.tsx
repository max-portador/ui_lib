import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNotifications } from '@/entities/Notifications/api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

const NotificationList = memo((props: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });
    const {
        className,
    } = props;

    if (isLoading) {
        return (
            <VStack
                gap={16}
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap={16}
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => {
                return <NotificationItem key={item.id} item={item} />;
            })}
        </VStack>
    );
});

export { NotificationList };
