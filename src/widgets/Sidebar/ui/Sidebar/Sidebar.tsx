import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )),
        [collapsed],
    );

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
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.items}>
                {itemsList}
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
});

export { Sidebar };
