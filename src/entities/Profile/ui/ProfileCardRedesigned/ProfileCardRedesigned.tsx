import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { ProfileCardSkeletonRedesigned } from '../ProfileCardSkeletonRedesigned/ProfileCardSkeletonRedesigned';
import type { ProfileCardProps } from '../../model/types/types';
import cls from './ProfileCardRedesigned.module.scss';

const ProfileCardRedesigned: FC<ProfileCardProps> = (props) => {
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
        return <ProfileCardSkeletonRedesigned />;
    }

    if (error) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCardRedesigned, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    variant="error"
                    align="center"
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    return (
        <Card
            padding="24"
            max
            border="light-round"
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} size={120} />
                </HStack>
            )}
            <HStack gap={24} max>
                <VStack gap={16} max align="start">
                    <Input
                        value={data?.firstName}
                        label={t('Ваше имя')}
                        readonly={readonly}
                        onChange={onChangeFirstName}
                        data-testid={`${dataTestId}.firstname`}
                    />
                    <Input
                        value={data?.lastName}
                        label={t('Ваша фамилия')}
                        readonly={readonly}
                        onChange={onChangeLastName}
                        data-testid={`${dataTestId}.lastname`}
                    />
                    <Input
                        value={data?.age}
                        label={t('Ваш возраст')}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        label={t('Ваш город')}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                </VStack>
                <VStack gap={16} max align="start">
                    <Input
                        value={data?.username}
                        label={t('Введите имя пользователя')}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        value={data?.avatar}
                        label={t('Введите ссылку на аватар')}
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
            </HStack>
        </Card>
    );
};

export { ProfileCardRedesigned };
