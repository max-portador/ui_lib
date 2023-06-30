import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { article } from '@/app/examples/article';
import ArticleDetailsPage from './ArticleDetailsPage';
import '@/app/styles/index.scss';

const commentsEntities = {
    1: {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://avatars.githubusercontent.com/u/46213974?v=4',
        },
        text: 'first',
        id: '1',
    },
};

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <div className="story-wrapper">
        <ArticleDetailsPage {...args} />
    </div>
);

export const Showcase = Template.bind({});
Showcase.args = {};
Showcase.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
        {
            url: `${__API__}/articles?_limit=4&lorem=lorem`,
            method: 'GET',
            status: 200,
            response: [article],
        },
    ],
};
Showcase.decorators = [
    StoreDecorator({
        articleDetails: { data: article, isLoading: false },
        articlesDetailsPage: {
            comments: {
                isLoading: false,
                ids: ['1'],
                entities: commentsEntities,
            },
        },
    }),
];
