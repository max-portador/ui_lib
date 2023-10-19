import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropDown';
import { Text, TextTheme } from '@/shared/ui/depricated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/depricated/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { HStack } from '@/shared/ui/depricated/Stack';
import cls from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NavbarProps {
    className?: string;
}

interface FaetureNavbarProps {
    className?: string;
}

const DeprecatedNavbar = (props: FaetureNavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
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

const NavbarRedesigned = (props: FaetureNavbarProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack gap={16} className={cls.actions}>
                <NotificationButton key="notification-btn" />
                <AvatarDropdown key="avatar-dropdown" />
            </HStack>
        </header>
    );
};

const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<NavbarRedesigned className={className} />}
                off={<DeprecatedNavbar className={className} />}
            />
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});

export { Navbar };
