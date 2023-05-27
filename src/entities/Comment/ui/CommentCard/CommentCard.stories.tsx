import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { CommentCard } from './CommentCard';

const comment = {
    id: '1',
    text: 'comment 1',
    user: {
        id: '1',
        username: 'Tequila Sunset',
        avatar: 'https://papik.pro/uploads/posts/2021-09/1630689496_2-papik-pro-p-betmen-detskii-risunok-2.jpg',
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

export const IsLoading = Template.bind({});
IsLoading.args = {
    comment,
    isLoading: true,
};
