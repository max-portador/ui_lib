import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { article, article2 } from '@/app/examples/article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&lorem=lorem`,
            method: 'GET',
            status: 200,
            response: [article, article2],
        },
    ],
};
