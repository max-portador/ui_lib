import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <div className="story-wrapper">
        <ArticleInfiniteList {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({}, { [rtkApi.reducerPath]: rtkApi.reducer })];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    StoreDecorator(
        {},
        { [rtkApi.reducerPath]: rtkApi.reducer },
    ),
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [
    StoreDecorator(
        {},
        { [rtkApi.reducerPath]: rtkApi.reducer },
    ),
    ThemeDecorator(Theme.PURPLE),
];
