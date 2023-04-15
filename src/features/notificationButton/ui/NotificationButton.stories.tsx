import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationButton } from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { notificationItems } from '@/shared/config/storybook/examples/notificationItems';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <div className="story-wrapper">
        <NotificationButton {...args} />
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
    decorators.push(StoreDecorator({}));
    st.decorators = decorators;
    st.parameters = {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: notificationItems,
            },
        ],
    };
});
