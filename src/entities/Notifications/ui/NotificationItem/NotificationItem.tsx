import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/depricated/Card';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import type { Notification } from '../../model/types/notifications';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    padding="8"
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <Text text={item.description} title={item.title} />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [
                        className,
                    ])}
                >
                    <TextDeprecated
                        text={item.description}
                        title={item.title}
                    />
                </CardDeprecated>
            }
        />
    );

    if (item.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});

export { NotificationItem };
