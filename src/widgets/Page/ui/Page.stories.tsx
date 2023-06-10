import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';

import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { userExamples } from '@/app/examples/users';

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

Normal.args = {};
Normal.decorators = [
    StoreDecorator({ user: { authData: userExamples['1'] } }),
];
