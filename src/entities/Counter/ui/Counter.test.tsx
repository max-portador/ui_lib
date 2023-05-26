import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter tests', () => {
    test('value in the DOM', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        await userEvent.click(screen.getByTestId('btn-inc'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        await userEvent.click(screen.getByTestId('btn-dec'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
