import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/depricated/Popups';
import { Country } from '../../model/types/countries';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

const CountrySelect: FC<CountrySelectProps> = (props) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (country: string) => {
            onChange?.(country as Country);
        },
        [onChange],
    );
    const componentProps = {
        label: t('Укажите страну'),
        defaultValue : t('Укажите страну'),
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

export { CountrySelect };
