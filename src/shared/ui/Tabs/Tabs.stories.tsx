import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { TabItem, Tabs } from './Tabs';
import '@/app/styles/index.scss';

const tabs: TabItem<string>[] = ['1', '2', '3'].map((item) => ({ value: `tab ${item}`, content: `tab ${item}` }));
export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
    <div className="story-wrapper">
        <Tabs {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
    tabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
