import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './StarRating.module.scss';

interface StartRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const stars = [1, 2, 3, 4, 5];

const StarRating = memo((props: StartRatingProps) => {
    const { className, onSelect, size = 30, selectedStarts = 0 } = props;

    const [currentStarsCount, setCurrenStarsCount] = useState(selectedStarts);
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
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const isHovered = currentStarsCount >= starNumber;

                const commonProps = {
                    SVG: StarIcon,
                    key: starNumber,
                    className: classNames(cls.starIcon, {
                        [cls.normal]: !isHovered,
                        [cls.hovered]: isHovered,
                        [cls.selected]: isSelected,
                    }),
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Icon clickable={!isSelected} {...commonProps} />}
                        off={<IconDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});

export { StarRating };
