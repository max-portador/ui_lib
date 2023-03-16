import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { Button } from 'shared/ui/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <div className="story-wrapper">
        <Dropdown {...args} />
    </div>
);
export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: 'one',
        },
        {
            content: 'two',
        },
    ],
};

// export const Dark = Template.bind({});
// Dark.args = {};
//
// Dark.decorators = [
//     ThemeDecorator(Theme.DARK),
// ];
//
// export const Purple = Template.bind({});
// Purple.args = {};
//
// Purple.decorators = [
//     ThemeDecorator(Theme.PURPLE),
// ];
