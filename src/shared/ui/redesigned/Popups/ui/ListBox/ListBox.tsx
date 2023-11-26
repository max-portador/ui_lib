import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../Button';
import { classNames } from '../../../../../lib/classNames/classNames';
import { DropDownDirection } from '../../../../../types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content?: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    onChange: (val: T) => void;
    items?: ListBoxItem<T>[];
    value?: T;
    label?: string;
    defaultValue?: string;
    readonly?: boolean;
    direction?: DropDownDirection;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const currentLabel =
        items?.find((item) => item.value === value)?.content ?? value;
    const defaultLabel =
        items?.find((item) => item.value === defaultValue)?.content ??
        defaultValue;

    return (
        <HStack gap={4}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button as={Fragment}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        className={popupCls.trigger}
                    >
                        {currentLabel ?? defaultLabel}
                    </Button>
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
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
}
