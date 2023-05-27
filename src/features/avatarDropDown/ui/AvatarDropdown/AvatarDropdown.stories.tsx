import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { userExamples } from '@/app/examples/users';
import '@/app/styles/index.scss';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <div className="story-wrapper">
        <AvatarDropdown {...args} />
    </div>
);
export const Showcase = Template.bind({});
Showcase.args = {};
Showcase.decorators = [
    StoreDecorator({ user: { authData: userExamples['1'] } }),
];
