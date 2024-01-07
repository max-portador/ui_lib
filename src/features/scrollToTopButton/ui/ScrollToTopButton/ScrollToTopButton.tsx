import React, { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowUp from '@/shared/assets/icons/arrow-up.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            SVG={ArrowUp}
            onClick={onClick}
            clickable
            width={32}
            height={32}
            className={className}
        />
    );
});

export { ScrollToTopButton };
