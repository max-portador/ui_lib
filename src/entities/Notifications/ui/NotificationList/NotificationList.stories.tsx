import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { notificationItems } from '@/app/examples/notificationItems';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <div className="story-wrapper">
        <NotificationList {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.decorators = [];
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
    st.decorators?.push(StoreDecorator({}));
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
