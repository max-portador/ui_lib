import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface AvatarDropdownProps {
    className?: string;
}

const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const {
        className,
    } = props;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={className}
            trigger={<Avatar size={30} src={authData.avatar} />}
            direction="bottom left"
            items={[

                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
        />
    );
});

export { AvatarDropdown };
