import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const children = (
    <>
        <div>FIRST</div>
        <div>SECOND</div>
        <div>THIRD</div>
    </>
);

const Template: ComponentStory<typeof Flex> = (args) => (
    <div className="story-wrapper">
        <Flex {...args} />
    </div>
);

export const RowNormal = Template.bind({});
RowNormal.args = {
    children,
};

export const RowGap4Normal = Template.bind({});
RowGap4Normal.args = {
    children,
    gap: 4,
};

export const RowGap8Normal = Template.bind({});
RowGap8Normal.args = {
    children,
    gap: 8,
};

export const RowGap16Normal = Template.bind({});
RowGap16Normal.args = {
    children,
    gap: 16,
};

export const RowGap32Normal = Template.bind({});
RowGap32Normal.args = {
    children,
    gap: 32,
};

export const RowDark = Template.bind({});
RowDark.args = {
    children,
};

RowDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const RowPurple = Template.bind({});
RowPurple.args = {
    children,
};

RowPurple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const ColumnNormal = Template.bind({});
ColumnNormal.args = {
    children,
    direction: 'column',
};

export const ColumnGap4Normal = Template.bind({});
ColumnGap4Normal.args = {
    children,
    gap: 4,
    direction: 'column',
};

export const ColumnGap8Normal = Template.bind({});
ColumnGap8Normal.args = {
    children,
    gap: 8,
    direction: 'column',
};

export const ColumnGap16Normal = Template.bind({});
ColumnGap16Normal.args = {
    children,
    gap: 16,
    direction: 'column',
};

export const ColumnGap32Normal = Template.bind({});
ColumnGap32Normal.args = {
    children,
    gap: 32,
    direction: 'column',
};

export const ColumnDark = Template.bind({});
ColumnDark.args = {
    children,
    direction: 'column',
};

ColumnDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ColumnPurple = Template.bind({});
ColumnPurple.args = {
    children,
    direction: 'column',
};

ColumnPurple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
