import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Icon } from '@/shared/ui/depricated/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Устарел, используем новый
 * @deprecated
 */
const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
                onClick={onCopy}
            >
                <Icon SVG={CopyIcon} className={cls.copyIcon} />
            </Button>

            <code>{text}</code>
        </pre>
    );
});

export { Code };
