import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/counterSLice';

export {
    counterReducer,
    Counter,
    CounterSchema,
};
