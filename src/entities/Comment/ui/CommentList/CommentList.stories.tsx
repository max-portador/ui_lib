import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { commentsExamples } from '@/app/examples/comments';
import { CommentList } from './CommentList';

const comments = commentsExamples;

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
export const Empty = Template.bind({});
Empty.args = {
    comments: [],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    comments: [],
    isLoading: true,
};
