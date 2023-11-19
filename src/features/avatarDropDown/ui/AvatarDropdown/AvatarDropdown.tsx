import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Avatar as AvatarDeprecated } from '@/shared/ui/depricated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown as DropDownDepreceted } from '@/shared/ui/depricated/Popups';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const { className } = props;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                {
                    content: t('Админка'),
                    href: getRouteAdminPanel(),
                },
            ]
            : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures feature={'isAppRedesigned'} on={<Dropdown
            className={className}
            trigger={
                <Avatar size={40} src={authData.avatar} />
            }
            direction='bottom left'
            items={items}
        />} off={<DropDownDepreceted
            className={className}
            trigger={
                <AvatarDeprecated size={30} src={authData.avatar} fallbackInverted />
            }
            direction='bottom left'
            items={items}
        />}
        />
    );
});
