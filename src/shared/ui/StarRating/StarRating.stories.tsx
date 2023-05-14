import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import 'app/styles/index.scss';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StarRating} from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <div className="story-wrapper">
        <StarRating {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
