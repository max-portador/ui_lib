import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { article, article2 } from '@/app/examples/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleList } from './ArticleList';

const articles = [article, article2];
export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <div className="story-wrapper">
        <ArticleList {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
    articles,
};

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    articles,
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const BigLoading = Template.bind({});
BigLoading.args = {
    view: ArticleView.BIG,
    isLoading: true,
};
