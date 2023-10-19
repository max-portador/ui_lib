import React, { CSSProperties, FC, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/depricated/AppImage';
import UserSvg from '@/shared/assets/icons/user-20-20.svg';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    size?: number;
    alt?: string;
    src?: string;
    fallbackInverted?: boolean;
}

/**
 * Устарел, используем новый
 * @deprecated
 */
const Avatar: FC<AvatarProps> = (props) => {
    const { className, src, size, alt, fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const mods: Mods = {};

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            SVG={UserSvg}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
};

export { Avatar };
