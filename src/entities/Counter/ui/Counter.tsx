import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useCounterActions } from '../model/slice/counterSLice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { HStack, VStack } from '@/shared/ui/Stack';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useCounterValue();
    const { t } = useTranslation();

    const { increment, decrement, add } = useCounterActions();
    const inc = () => {
        increment();
    };

    const dec = () => {
        decrement();
    };

    const addFive = () => {
        add(5);
    };

    return (
        <div>
            <VStack gap={16} align="center">
                <HStack>
                    <h1 data-testid="value-title">
                        {`${t('value')} = ${counterValue}`}
                    </h1>
                </HStack>
                <HStack>
                    <Button data-testid="btn-dec" onClick={dec}>-</Button>
                    <Button data-testid="btn-inc" onClick={inc}>+</Button>
                    <Button data-testid="btn-inc" onClick={addFive}>+5</Button>
                </HStack>
            </VStack>
        </div>

    );
};
