import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '@/widgets/Navbar/ui/Navbar.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropDown';

interface NavbarRedesignedProps {
    className?: string;
}

export const NavbarRedesigned = function (props: NavbarRedesignedProps) {
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
