import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import '@/app/styles/index.scss';

export default {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <div className="story-wrapper">
        <ArticleSortSelector {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
