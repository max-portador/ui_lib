import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/depricated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/depricated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { NotificationList } from '@/entities/Notifications';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notificationR.svg';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NotificationButtonProps {
    className?: string;
}

const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon SVG={NotificationIcon} clickable onClick={onOpenDrawer} />
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                >
                    <IconDeprecated SVG={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames('', {}, [className])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            {' '}
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames('', {}, [className])}
                            trigger={trigger}
                            direction="bottom left"
                        >
                            {' '}
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});

export { NotificationButton };
