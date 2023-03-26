import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

const Icon: FC<IconProps> = memo((props: IconProps) => {
    const {
        className,
        SVG,
        inverted,
    } = props;
    return (
        <SVG className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});

export { Icon };
