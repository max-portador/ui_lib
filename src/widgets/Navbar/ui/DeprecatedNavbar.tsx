import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/widgets/Navbar/ui/Navbar.module.scss';
import { Text, TextTheme } from '@/shared/ui/depricated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/depricated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropDown';

interface DeprecatedNavbarProps {
    className?: string;
}

export const DeprecatedNavbar = function (props: DeprecatedNavbarProps) {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text
                className={cls.appName}
                title={t('Ulbi TV App')}
                theme={TextTheme.INVERTED}
            />
            <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('Создать статью')}
            </AppLink>
            <HStack gap={16} className={cls.actions}>
                <NotificationButton key="notification-btn" />
                <AvatarDropdown key="avatar-dropdown" />
            </HStack>
        </header>
    );
};
