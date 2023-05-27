import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
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
Normal.args = {};
Normal.decorators = [
    StoreDecorator({}),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notificationItems,
        },
    ],
};
