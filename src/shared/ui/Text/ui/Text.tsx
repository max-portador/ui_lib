import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme,
    } = props;
    return (
        <div className={classNames('', {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p> }
            {text && <p className={cls.text}>{text}</p> }
        </div>
    );
});

export { Text };
