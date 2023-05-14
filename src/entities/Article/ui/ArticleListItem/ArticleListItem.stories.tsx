import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { article } from '@/app/examples/article';
import { ArticleView } from '@/entities/Article/model/consts/consts';
import { ArticleListItem } from './ArticleListItem';
import { Theme } from '@/shared/const/theme';

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

export const NormalSmall = Template.bind({});
NormalSmall.args = {
    view: ArticleView.SMALL,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
    view: ArticleView.SMALL,
};

DarkSmall.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PurpleSmall = Template.bind({});
PurpleSmall.args = {
    view: ArticleView.SMALL,
};

PurpleSmall.decorators = [
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
