import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                isSquare
                size={ButtonSize.L}
            >
                {collapsed ? '<' : '>' }
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                    to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная страница')}
                    </span>

                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};

export { Sidebar };
