import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

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

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.PURPLE),
];
