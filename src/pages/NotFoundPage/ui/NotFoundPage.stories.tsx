import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
    <div className="story-wrapper">
        <NotFoundPage {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [
    StoreDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Purple = Template.bind({});
Purple.args = {};
Purple.decorators = [StoreDecorator({}), ThemeDecorator(Theme.PURPLE)];
