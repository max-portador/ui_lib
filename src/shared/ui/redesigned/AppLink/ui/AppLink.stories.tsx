import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { to: '/' },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'AppLink',
};

export const Red = Template.bind({});
Red.args = {
    variant: 'red',
    children: 'AppLink',
};
