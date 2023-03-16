import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/countries';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void
    readonly: boolean
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

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((country: string) => {
        onChange?.(country as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            items={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
            direction="top right"
        />
    );
};

export { CountrySelect };
