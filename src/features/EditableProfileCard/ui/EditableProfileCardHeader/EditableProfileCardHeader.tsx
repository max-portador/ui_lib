import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/EditableProfileCard';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
    readonly: boolean;
    onEdit: () => void
    onCancelEdit: () => void
    onSave: () => void
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;
    const {
        className,
        readonly,
        onEdit,
        onCancelEdit,
        onSave,
    } = props;

    return (
        <div className={classNames(cls.editableProfileCardHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                {canEdit && (readonly
                    ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </>

                    ))}
            </div>

        </div>
    );
};

export { EditableProfileCardHeader };
