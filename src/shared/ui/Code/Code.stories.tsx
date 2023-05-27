import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { codeExample } from '@/app/examples/code';
import { Code } from './Code';
import '@/app/styles/index.scss';

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

export const Showcase = Template.bind({});
Showcase.args = {
    text: codeExample,
};
