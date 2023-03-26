import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { article, article2 } from '@/shared/config/storybook/examples/article';
import { ArticleView } from '@/entities/Article';
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
        <ArticleList {...args} articles={articles} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const NormalBig = Template.bind({});
NormalBig.args = {
    view: ArticleView.BIG,
};

export const DarkBig = Template.bind({});
DarkBig.args = {
    view: ArticleView.BIG,
};

DarkBig.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PurpleBig = Template.bind({});
PurpleBig.args = {
    view: ArticleView.BIG,
};

PurpleBig.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const NormalLoading = Template.bind({});
NormalLoading.args = {
    isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    isLoading: true,
};

DarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PurpleLoading = Template.bind({});
PurpleLoading.args = {
    isLoading: true,
};

PurpleLoading.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const NormalBigLoading = Template.bind({});
NormalBigLoading.args = {
    view: ArticleView.BIG,
    isLoading: true,
};

export const DarkBigLoading = Template.bind({});
DarkBigLoading.args = {
    view: ArticleView.BIG,
    isLoading: true,
};

DarkBigLoading.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PurpleBigLoading = Template.bind({});
PurpleBigLoading.args = {
    view: ArticleView.BIG,
    isLoading: true,
};

PurpleBigLoading.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
