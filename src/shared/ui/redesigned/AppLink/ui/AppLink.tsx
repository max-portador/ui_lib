import { forwardRef, memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: ReactNode;
    activeClassName?: string;
}

const AppLink = memo(
    forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
        const {
            to,
            className,
            children,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props;
        return (
            <NavLink
                to={to}
                className={ ({isActive}) => classNames(cls[variant], {[activeClassName]: isActive}, [className])}
                ref={ref}
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    }),
);

export { AppLink };
