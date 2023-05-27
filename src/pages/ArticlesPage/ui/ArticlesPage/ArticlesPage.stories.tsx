import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { article, article2 } from '@/app/examples/article';
import ArticlesPage from './ArticlesPage';
import '@/app/styles/index.scss';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <div className="story-wrapper">
        <ArticlesPage {...args} />
    </div>
);

export const Showcase = Template.bind({});
Showcase.args = {};
Showcase.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [article, article2],
        },
    ],
};
Showcase.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: false,
            ids: [1, 2],
            entities: { 1: article, 2: article2 },
        },
    }),
];
