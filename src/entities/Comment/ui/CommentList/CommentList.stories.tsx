import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const comments = [
    {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://avatars.githubusercontent.com/u/46213974?v=4',
        },
        text: 'first',
        id: '1',
    },
    {
        user: {
            id: '2',
            username: 'user',
            avatar: 'https://pbs.twimg.com/media/FJ6PTN7XwAEeUX6.jpg',
        },
        text: 'brrrrrrr',
        id: '2',
    },
];

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <div className="story-wrapper">
        <CommentList {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    comments,
};

export const Dark = Template.bind({});
Dark.args = {
    comments,
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    comments,
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
};

export const EmptyDark = Template.bind({});
EmptyDark.args = {
    comments: [],
};

EmptyDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const EmptyPurple = Template.bind({});
EmptyPurple.args = {
    comments: [],
};

EmptyPurple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    comments: [],
    isLoading: true,
};

LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const LoadingPurple = Template.bind({});
LoadingPurple.args = {
    comments: [],
    isLoading: true,
};

LoadingPurple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
