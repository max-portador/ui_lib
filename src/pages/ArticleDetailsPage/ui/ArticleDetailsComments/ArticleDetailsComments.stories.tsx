import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import '@/app/styles/index.scss';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <div className="story-wrapper">
        <ArticleDetailsComments {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [
    StoreDecorator({}),
];
