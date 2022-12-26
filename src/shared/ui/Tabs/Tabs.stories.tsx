import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { TabItem, Tabs } from './Tabs';

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

export const Dark = Template.bind({});
Dark.args = {
    tabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Purple = Template.bind({});
Purple.args = {
    tabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

Purple.decorators = [
    ThemeDecorator(Theme.PURPLE),
];
