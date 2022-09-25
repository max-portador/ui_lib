import { classNames } from './classNames';

describe('classNames', () => {
    test('Test1', () => {
        expect(classNames('someCLass')).toEqual('someCLass');
    });
    test('with additional arguments', () => {
        const expected = 'someCLass class1 class2';
        const additional = ['class1', 'class2'];
        expect(classNames('someCLass', {}, additional)).toEqual(expected);
    });
    test('with mods', () => {
        const expected = 'someCLass class1 class2 hovered scrollable';
        const additional = ['class1', 'class2'];
        const mods = { hovered: true, scrollable: true };
        expect(classNames('someCLass', mods, additional)).toEqual(expected);
    });
    test('with mods false', () => {
        const expected = 'someCLass class1 class2 hovered';
        const additional = ['class1', 'class2'];
        const mods = { hovered: true, scrollable: false };
        expect(classNames('someCLass', mods, additional)).toEqual(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someCLass class1 class2 hovered';
        const additional = ['class1', 'class2'];
        const mods = { hovered: true, scrollable: undefined as boolean };
        expect(classNames('someCLass', mods, additional)).toEqual(expected);
    });
});
