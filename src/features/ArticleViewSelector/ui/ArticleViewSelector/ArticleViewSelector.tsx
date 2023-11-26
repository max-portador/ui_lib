import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/view_list.svg';
import TilesIconDeprecated from '@/shared/assets/icons/view_cells.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TilesIcon from '@/shared/assets/icons/plate-24-24.svg';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/depricated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

type ViewType = {
    view: ArticleView;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const viewTypes: ViewType[] = [
    {
        view: 'SMALL',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TilesIcon,
            off: () => TilesIconDeprecated,
        }),
    },
    {
        view: 'BIG',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                    border="round"
                >
                    <HStack gap={8}>
                        {viewTypes.map((viewType) => (
                            <Icon
                                SVG={viewType.icon}
                                className={classNames('', {
                                    [cls.nonSelected]: viewType.view !== view,
                                })}
                                clickable
                                key={viewType.view}
                                onClick={onClick(viewType.view)}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                SVG={viewType.icon}
                                className={classNames('', {
                                    [cls.nonSelected]: viewType.view !== view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});

export { ArticleViewSelector };
