import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { article } from '@/app/examples/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <div className="story-wrapper">
        <ArticleListItem {...args} article={article} />
    </div>
);

export const Small = Template.bind({});
Small.args = {
    view: 'SMALL',
};
export const Big = Template.bind({});
Big.args = {
    view: 'BIG',
};
