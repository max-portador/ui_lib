import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StarRating } from './StarRating';
import 'app/styles/index.scss';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <div className="story-wrapper">
        <StarRating {...args} />
    </div>
);
export const Showcase = Template.bind({});
Showcase.args = {};
