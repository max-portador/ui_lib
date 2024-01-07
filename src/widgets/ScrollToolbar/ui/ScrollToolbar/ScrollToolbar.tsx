import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ScrollToolbar.module.scss';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { t } = useTranslation();

    const { className } = props;
    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});

export { ScrollToolbar };
