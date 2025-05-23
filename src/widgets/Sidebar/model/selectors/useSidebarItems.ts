import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-icon.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import ArticlesIcon from '@/shared/assets/icons/article.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import SettingsIcon from '@/shared/assets/icons/plate-24-24.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { SidebarItemType } from '../../model/types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);

    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
            text: 'Главная страница',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'О сайте',
        },
        {
            path: getRouteSettings(),
            Icon: SettingsIcon,
            text: 'Настройки',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
