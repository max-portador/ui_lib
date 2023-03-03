import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
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

export const Dark = Template.bind({});
Dark.args = {
    onSendComment: action('onSendComment'),
};

Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    onSendComment: action('onSendComment'),
};

Purple.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.PURPLE),
];
