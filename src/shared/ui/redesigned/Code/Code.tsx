import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Icon
                SVG={CopyIcon}
                className={cls.copyBtn}
                clickable
                onClick={onCopy}
                width={16}
                height={16}
            />

            <code>{text}</code>
        </pre>
    );
});

export { Code };
