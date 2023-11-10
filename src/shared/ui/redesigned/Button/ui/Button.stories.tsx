import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import '@/app/styles/index.scss';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div className="story-wrapper">
        <Button {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
   variant: 'clear'
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'OutlineSizeL',
    size: 'l'
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'OutlineSizeXL',
    size: 'xl',
};



export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    disabled: true,
};
