import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { codeExample } from '@/app/examples/code';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <div className="story-wrapper">
        <Code {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    text: codeExample,
};

export const Dark = Template.bind({});
Dark.args = { text: codeExample };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Purple = Template.bind({});
Purple.args = { text: codeExample };
Purple.decorators = [ThemeDecorator(Theme.PURPLE)];
