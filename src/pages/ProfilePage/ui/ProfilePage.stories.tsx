import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatar.jpeg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const initialState = {
    profile: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastName: 'Matveev',
            firstName: 'Ignat',
            currency: Currency.EUR,
            city: 'default-1',
            avatar: AvatarImg,
        },

        form: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastName: 'Matveev',
            firstName: 'Ignat',
            currency: Currency.EUR,
            city: 'default-1',
            avatar: AvatarImg,
        },
        readonly: true,
    },
};

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <div className="story-wrapper">
        <ProfilePage {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(initialState)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];

export const Purple = Template.bind({});
Purple.args = {};
Purple.decorators = [ThemeDecorator(Theme.PURPLE), StoreDecorator(initialState)];
