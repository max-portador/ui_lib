import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
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

export const Dark = Template.bind({});

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

[Normal, Dark, Purple].forEach((st) => {
    st.args = {};
    const decorators = st.decorators ?? [];
    decorators.push(StoreDecorator({ user: { authData: userExamples['1'] } }));
    st.decorators = decorators;

    st.parameters = {
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
});
