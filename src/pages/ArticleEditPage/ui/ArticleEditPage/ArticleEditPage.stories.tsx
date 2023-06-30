import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';
import '@/app/styles/index.scss';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <div className="story-wrapper">
        <ArticleEditPage {...args} />
    </div>
);
export const Showcase = Template.bind({});
Showcase.args = {};

Showcase.decorators = [StoreDecorator({})];
