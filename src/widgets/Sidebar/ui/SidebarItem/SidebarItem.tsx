import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/depricated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
    item,
    collapsed,
}: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <AppLink
                    className={classNames(cls.itemRedesigned, {
                        [cls.collapsedRedesigned]: collapsed,
                    })}
                    to={item.path}
                    activeClassName={cls.active}
                >
                    <Icon SVG={item.Icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.SECONDARY}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                    to={item.path}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
};

export { SidebarItem };
