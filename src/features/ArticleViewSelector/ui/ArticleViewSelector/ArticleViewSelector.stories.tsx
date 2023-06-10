import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <div className="story-wrapper">
        <ArticleViewSelector {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
