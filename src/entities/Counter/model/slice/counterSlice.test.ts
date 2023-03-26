import { counterActions, counterReducer } from './counterSLice';

import { CounterSchema } from '@/entities/Counter';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 108,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement).value)
            .toEqual(107);
    });
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 108,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment))
            .toEqual({ value: 109 });
    });
    test('increment with undefined state', () => {
        expect(counterReducer(undefined, counterActions.increment))
            .toEqual({ value: 1 });
    });
});
