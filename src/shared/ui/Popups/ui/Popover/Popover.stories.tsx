import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';
import '@/app/styles/index.scss';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <div className="story-wrapper">
        <Popover {...args} />
    </div>
);
export const Showcase = Template.bind({});
Showcase.args = {};
