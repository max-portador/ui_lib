import React from 'react';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSLice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const inc = () => {
        dispatch(counterActions.increment());
    };

    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                { `${t('value')} = ${counterValue}` }
            </h1>
            <Button data-testid="btn-dec" onClick={dec}>-</Button>
            <Button data-testid="btn-inc" onClick={inc}>+</Button>
        </div>

    );
};
