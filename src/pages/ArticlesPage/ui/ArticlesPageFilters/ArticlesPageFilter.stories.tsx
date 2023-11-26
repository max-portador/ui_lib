import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleSortFields } from '@/entities/Article';
import { ArticlesPageFilter } from './ArticlesPageFilter';
import { article, article2 } from '@/app/examples/article';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilter>;

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => (
    <div className="story-wrapper">
        <ArticlesPageFilter {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            ids: [],
            entities: {},
            isLoading: false,
            view: 'SMALL',
            page: 1,
            hasMore: true,
            _inited: false,
            limit: 9,
            sort: ArticleSortFields.CREATED,
            order: 'asc',
            search: '',
        },
    }),
];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [article, article2],
        },
    ],
};
