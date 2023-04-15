import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { userExamples } from '@/shared/config/storybook/examples/users';

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
    decorators.push(StoreDecorator({ user: { authData: userExamples['1'] } }));
    st.decorators = decorators;
});
