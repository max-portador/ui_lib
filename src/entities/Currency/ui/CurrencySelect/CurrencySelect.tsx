import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/depricated/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (currency: string) => {
            onChange?.(currency as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            label={t('Укажите валюту')}
            value={value}
            items={options}
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите валюту')}
    //         options={options}
    //         value={value}
    //         readonly={readonly}
    //         onChange={onChangeHandler}
    //     />
    // );
};

export { CurrencySelect };
