import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Profile } from '@/features/EditableProfileCard';
import { Loader } from '@/shared/ui/Loader';
import { TextAlign } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country } from '@/entities/Country/model/types/countries';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar: (value: string) => void;
    onChangeCurrency?: (cuurency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    'data-testid'?: string;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        'data-testid': dataTestId = 'EditableProfileCardHeader',
    } = props;

    if (isLoading) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.profileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap={16}
            className={classNames(cls.profileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.firstName}
                placeholder={t('Ваше имя')}
                readonly={readonly}
                onChange={onChangeFirstName}
                data-testid={`${dataTestId}.firstname`}
            />
            <Input
                value={data?.lastName}
                placeholder={t('Ваша фамилия')}
                readonly={readonly}
                onChange={onChangeLastName}
                data-testid={`${dataTestId}.lastname`}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                readonly={readonly}
                onChange={onChangeCountry}
            />
        </VStack>
    );
};

export { ProfileCard };
