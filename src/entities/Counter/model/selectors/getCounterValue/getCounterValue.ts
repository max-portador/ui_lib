import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';

import { CounterSchema } from '../../types/counterSchema';
import { buildSelector } from '@/shared/lib/store';

const [useCounterValue, getCounterValue] = buildSelector(createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
));

export { useCounterValue, getCounterValue };
