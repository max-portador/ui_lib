import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <div className="story-wrapper">
        <RatingCard {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
