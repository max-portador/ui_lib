import { memo, type ReactNode, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/shared/ui/depricated/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/depricated/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/depricated/Button';
import { VStack } from '@/shared/ui/depricated/Stack';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/depricated/AppLogo';

interface SidebarProps {
    className?: string;
}

interface DeprecatedSidebarProps {
    className?: string;
    onClick: () => void;
    collapsed: boolean;
    itemsList: ReactNode[];
}

const DeprecatedSidebar = (props: DeprecatedSidebarProps) => {
    const { className, collapsed, onClick, itemsList } = props;
    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onClick}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                isSquare
                size={ButtonSize.L}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <VStack role="navigation" gap={8} className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
};

const SidebarRedesigned = (
    props: Omit<DeprecatedSidebarProps, 'onClick' | 'itemsList'>,
) => {
    const { className, collapsed } = props;
    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo className={cls.appLogo} />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
};

const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [sidebarItemsList, collapsed],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <SidebarRedesigned
                    className={className}
                    collapsed={collapsed}
                />
            }
            off={
                <DeprecatedSidebar
                    className={className}
                    onClick={onToggle}
                    collapsed={collapsed}
                    itemsList={itemsList}
                />
            }
        />
    );
});
export { Sidebar };
