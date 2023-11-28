import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/depricated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

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

    const componentProps = {
        label: t('Укажите валюту'),
        defaultValue : t('Укажите валюту'),
        value,
        items: options,
        className: classNames('', {}, [className]),
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...componentProps} />}
            off={<ListBoxDeprecated {...componentProps} />}
        />
    );
};

export { CurrencySelect };
