import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <div className="story-wrapper">
        <ArticleTypeTabs {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
