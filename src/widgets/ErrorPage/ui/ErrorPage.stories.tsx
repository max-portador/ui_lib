import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorPage } from './ErrorPage';

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
    <ErrorPage {...args} />
);

export const Showcase = Template.bind({});
Showcase.args = {};
