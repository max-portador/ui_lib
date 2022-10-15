import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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

const Text: FC<TextProps> = (props) => {
    const { t } = useTranslation();

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
};

export { Text };
