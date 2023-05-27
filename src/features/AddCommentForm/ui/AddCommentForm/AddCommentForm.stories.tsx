import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <div className="story-wrapper">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <AddCommentForm {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};

Normal.decorators = [
    StoreDecorator({}),
];
