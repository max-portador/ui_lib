import React, { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import { Card } from '../Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: string;
    onTabClick: (val: T) => void;
    direction?: FlexDirection;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, onTabClick, value, direction = 'row' } = props;

    const handleClick = useCallback(
        (tab: TabItem<T>) => {
            onTabClick(tab.value as T);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            align="start"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = value === tab.value;
                return (
                    <Card
                        key={tab.value}
                        className={classNames(cls.tab, {
                            [cls.selected]: isSelected,
                        })}
                        onClick={() => handleClick(tab)}
                        variant={isSelected ? 'light' : 'normal'}
                        data-testId={`ArticleListTab.${tab.value}`}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};

export { Tabs };
