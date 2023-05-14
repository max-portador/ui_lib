import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { article, article2 } from '@/app/examples/article';
import ArticlesPage from './ArticlesPage';

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

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: false,
            ids: [1, 2],
            entities: { 1: article, 2: article2 },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({})];

export const Purple = Template.bind({});
Purple.args = {};
Purple.decorators = [StoreDecorator({}), ThemeDecorator(Theme.PURPLE)];
