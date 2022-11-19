import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpeg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const initialState = {
    profile: {
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
    },
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator(initialState)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];
