import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { article } from 'shared/config/storybook/examples/article';
import ArticleDetailsPage from './ArticleDetailsPage';

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

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({
    articleDetails: { data: article, isLoading: false },
    articlesDetailsPage: {
        comments: {
            isLoading: false,
            ids: ['1'],
            entities: commentsEntities,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: { data: article, isLoading: false },
        articlesDetailsPage: {
            comments: {
                isLoading: false,
                ids: ['1'],
                entities: commentsEntities,
            },
        },
    })];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [ThemeDecorator(Theme.PURPLE),
    StoreDecorator({
        articleDetails: { data: article, isLoading: false },
        articlesDetailsPage: {
            comments: {
                isLoading: false,
                ids: ['1'],
                entities: commentsEntities,
            },
        },
    })];
