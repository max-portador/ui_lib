import React, { ChangeEvent, FC, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly: boolean
}

const Select: FC<SelectProps> = (props) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChaneHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map(({ value, content }) => (
        <option className={cls.option} value={value} key={value}>
            {content}
        </option>
    )), [options]);

    const mods: Mods = {};

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                onChange={onChaneHandler}
                value={value}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    );
};

export { Select };
