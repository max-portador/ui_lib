import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

const Icon = memo((props: IconProps) => {
    const {
        className,
        SVG,
        inverted,
        ...otherProps
    } = props;
    return (
        <SVG
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});

export { Icon };
