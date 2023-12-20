import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/depricated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/depricated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
    addCommentFromActions,
    addCommentFromReducer,
} from '../../model/slice/addCommentFormSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './AddCommentForm.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (val: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFromActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);

    const reducers: ReducersList = {
        addCommentForm: addCommentFromReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card padding="24" border="light-round" max>
                        <HStack
                            max
                            gap={16}
                            justify="between"
                            className={className}
                            data-testid="AddCommentForm"
                        >
                            <Input
                                className={cls.input}
                                placeholder={t('Введите текст комментария')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                            />
                            <Button
                                className={cls.button}
                                onClick={onSendHandler}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        max
                        justify="between"
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
