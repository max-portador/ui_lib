import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notifications';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon SVG={NotificationIcon} inverted />
                </Button>
            )}
            direction="bottom left"
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});

export { NotificationButton };
