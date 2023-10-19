import { forwardRef, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

/**
 * Устарел, используем новый
 * @deprecated
 */
const AppLink = memo(
    forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
        const {
            to,
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...otherProps
        } = props;
        return (
            <Link
                to={to}
                className={classNames(cls.appLink, {}, [className, cls[theme]])}
                ref={ref}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }),
);

export { AppLink };
