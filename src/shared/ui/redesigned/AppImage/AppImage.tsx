import React, {
    ImgHTMLAttributes,
    memo,
    ReactNode,
    useLayoutEffect,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
}

// @ts-ignore
const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        src,
        alt = 'image',
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    console.log(src, isLoading);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={classNames('', {}, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});

export { AppImage };
