import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { userExamples } from '@/app/examples/users';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <div className="story-wrapper">
        <ArticleRating {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'POST',
            status: 200,
        },
    ],
};
Normal.decorators = [
    StoreDecorator({ user: { authData: userExamples['1'] } }),
];
