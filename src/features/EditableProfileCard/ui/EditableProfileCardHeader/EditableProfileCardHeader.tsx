import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/depricated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/depricated/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
    readonly: boolean;
    onEdit: () => void;
    onCancelEdit: () => void;
    onSave: () => void;
    'data-testid'?: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (
    props,
) => {
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
        'data-testid': dataTestId = 'EditableProfileCardHeader',
    } = props;

    return (
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Профиль')} />
            {canEdit &&
                (readonly ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                        data-testid={`${dataTestId}.EditButton`}
                    >
                        {t('Редактировать')}
                    </Button>
                ) : (
                    <HStack gap={8}>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                            data-testid={`${dataTestId}.CancelButton`}
                        >
                            {t('Отмена')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                            data-testid={`${dataTestId}.SaveButton`}
                        >
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                ))}
        </HStack>
    );
};

export { EditableProfileCardHeader };
