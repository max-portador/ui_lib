import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StartRating.module.scss';

interface StartRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const stars = [1, 2, 3, 4, 5];

const StartRating = memo((props: StartRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStarts = 0,
    } = props;

    const [currentStarsCount, setCurrenStarsCount] = useState(0);
    const [isSelected, setSelected] = useState(Boolean(selectedStarts));
    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrenStarsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrenStarsCount(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrenStarsCount(starCount);
            setSelected(true);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => {
                const isHovered = currentStarsCount >= starNumber;
                return (
                    <Icon
                        SVG={StarIcon}
                        key={starNumber}
                        className={classNames(cls.starIcon, {
                            [cls.normal]: !isHovered,
                            [cls.hovered]: isHovered,
                            [cls.selected]: isSelected,
                        })}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                    />
                );
            })}
        </div>
    );
});

export { StartRating };
