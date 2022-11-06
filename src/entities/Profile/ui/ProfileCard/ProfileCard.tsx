import React, { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from 'features/EditableProfileCard';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean,
    onChangeFirstName: (value: string) => void
    onChangeLastName: (value: string) => void
    onChangeAge: (value: string) => void
    onChangeCity: (value: string) => void
    onChangeUsername: (value: string) => void
    onChangeAvatar: (value: string) => void
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
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                ) }
                <Input
                    value={data?.firstName}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <Select
                    label="Укажите валюту"
                    options={[
                        { value: Currency.RUB, content: Currency.RUB },
                        { value: Currency.EUR, content: Currency.EUR },
                        { value: Currency.USD, content: Currency.USD },
                    ]}
                />
            </div>
        </div>
    );
};

export { ProfileCard };
