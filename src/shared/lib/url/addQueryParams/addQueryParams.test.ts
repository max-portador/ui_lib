import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
            hello: undefined,
        });
        expect(params).toBe('?test=value&second=2');
    });
});
