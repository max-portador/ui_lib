import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/depricated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" border="light-round" max>
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Профиль')} />
                        {canEdit &&
                            (readonly ? (
                                <Button
                                    onClick={onEdit}
                                    data-testid={`${dataTestId}.EditButton`}
                                >
                                    {t('Редактировать')}
                                </Button>
                            ) : (
                                <HStack gap={8}>
                                    <Button
                                        color="error"
                                        onClick={onCancelEdit}
                                        data-testid={`${dataTestId}.CancelButton`}
                                    >
                                        {t('Отмена')}
                                    </Button>
                                    <Button
                                        color="success"
                                        onClick={onSave}
                                        data-testid={`${dataTestId}.SaveButton`}
                                    >
                                        {t('Сохранить')}
                                    </Button>
                                </HStack>
                            ))}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <TextDeprecated title={t('Профиль')} />
                    {canEdit &&
                        (readonly ? (
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid={`${dataTestId}.EditButton`}
                            >
                                {t('Редактировать')}
                            </ButtonDeprecated>
                        ) : (
                            <HStack gap={8}>
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid={`${dataTestId}.CancelButton`}
                                >
                                    {t('Отмена')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid={`${dataTestId}.SaveButton`}
                                >
                                    {t('Сохранить')}
                                </ButtonDeprecated>
                            </HStack>
                        ))}
                </HStack>
            }
        />
    );
};

export { EditableProfileCardHeader };
