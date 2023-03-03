import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticleView } from 'entities/Article';
import { ArticleSortFields } from 'entities/Article/model/consts/consts';
import { ArticlesPageFilter } from './ArticlesPageFilter';

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
            view: ArticleView.SMALL,
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

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articlesPage: {
            ids: [],
            entities: {},
            isLoading: false,
            view: ArticleView.SMALL,
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

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
    StoreDecorator({
        articlesPage: {
            ids: [],
            entities: {},
            isLoading: false,
            view: ArticleView.SMALL,
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
