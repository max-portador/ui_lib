import React, { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { DropDownDirection } from 'shared/types/ui';
import { HStack } from 'shared/ui/Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string,
    content?: ReactNode,
    disabled?: boolean,
}

interface ListBoxProps {
    className?: string,
    onChange: <T extends string>(val: T) => void
    items?: ListBoxItem[],
    value?: string,
    label?: string,
    defaultValue?: string,
    readonly?: boolean,
    direction?: DropDownDirection
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        label,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={4}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <HListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button as={Fragment}>
                    <Button disabled={readonly} className={cls.trigger}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}
                                >
                                    {item.content ?? item.value}
                                    {selected && ' ✔'}
                                </li>
                            )}

                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>

        </HStack>

    );
});
