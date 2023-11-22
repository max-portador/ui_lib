import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from './Card';
import '@/app/styles/index.scss';

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
export const Showcase = Template.bind({});
Showcase.args = {
    children: <Text title="Card" text="Card text" />,
};
