import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const comment = {
    id: '1',
    text: 'comment 1',
    user: {
        id: '1',
        username: 'Tequila Sunset',
        avatar: 'https://pbs.twimg.com/media/FJ6PTN7XwAEeUX6.jpg',
    },
};

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <div className="story-wrapper">
        <CommentCard {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    comment,
};

export const Dark = Template.bind({});
Dark.args = {
    comment,
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    comment,
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = {
    comment,
    isLoading: true,
};

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    comment,
    isLoading: true,
};

DarkIsLoading.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PurpleIsLoading = Template.bind({});
PurpleIsLoading.args = {
    comment,
    isLoading: true,
};

PurpleIsLoading.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
