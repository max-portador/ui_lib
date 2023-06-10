import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ArticleTypeTabs } from './ArticleTypeTabs';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <div className="story-wrapper">
        <ArticleTypeTabs {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
