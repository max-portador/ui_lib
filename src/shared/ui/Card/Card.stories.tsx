import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text } from '@/shared/ui/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <div className="story-wrapper">
        <Card {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Card" text="Card text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Card" text="Card text" />,
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    children: <Text title="Card" text="Card text" />,
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
