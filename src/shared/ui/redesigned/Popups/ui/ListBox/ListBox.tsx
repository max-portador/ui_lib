import React, { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { Button } from '../../../Button';
import { classNames } from '../../../../../lib/classNames/classNames';
import { DropDownDirection } from '../../../../../types/ui';
import { HStack } from '../../../../redesigned/Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content?: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    onChange: <T extends string>(val: T) => void;
    items?: ListBoxItem[];
    value?: string;
    label?: string;
    defaultValue?: string;
    readonly?: boolean;
    direction?: DropDownDirection;
}

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
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListbox
                as="div"
                className={classNames(popupCls.popup, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListbox.Button as={Fragment}>
                    <Button disabled={readonly} className={popupCls.trigger}>
                        {value ?? defaultValue}
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
});
