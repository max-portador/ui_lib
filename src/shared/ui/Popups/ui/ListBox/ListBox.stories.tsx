import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from './ListBox';
import cls from './ListBox.module.scss';

const items = ['one', 'two', 'tree'].map((val, i) => ({
    value: val,
    disable: i === 1,
}));

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args: any) => (
    <div className={classNames('story-wrapper', {}, [cls.storyCase])}>
        <ListBox {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
    items,
    value: items[0].value,
};

export const Dark = Template.bind({});
Dark.args = {
    items,
    value: items[0].value,
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    items,
    value: items[0].value,
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const TopLeft = Template.bind({});
TopLeft.args = {
    items,
    value: items[0].value,
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items,
    value: items[0].value,
    direction: 'top right',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items,
    value: items[0].value,
    direction: 'bottom right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items,
    value: items[0].value,
    direction: 'bottom left',
};
