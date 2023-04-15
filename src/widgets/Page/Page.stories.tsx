import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { userExamples } from '@/shared/config/storybook/examples/users';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
    <div className="story-wrapper">
        <Page {...args}>
            PAGE COMPONENT
        </Page>
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
