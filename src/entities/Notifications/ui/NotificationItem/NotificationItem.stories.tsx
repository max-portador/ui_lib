import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { notificationItems } from '@/app/examples/notificationItems';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <div className="story-wrapper">
        <NotificationItem {...args} item={notificationItems[0]} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {};
