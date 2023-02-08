import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpeg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const initialState: DeepPartial<StateSchema> = {
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
        data: {
            id: '2',
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

    user: {
        authData: {
            id: '2',
            username: 'admin',
        },
    },
};

const cantEditSate: DeepPartial<StateSchema> = { ...initialState, user: undefined };

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <div className="story-wrapper">
        <EditableProfileCard {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [StoreDecorator(initialState)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(initialState)];

export const Purple = Template.bind({});
Purple.args = {};

Purple.decorators = [ThemeDecorator(Theme.PURPLE), StoreDecorator(initialState)];

export const PrimaryCantEdit = Template.bind({});
PrimaryCantEdit.args = {};

PrimaryCantEdit.decorators = [StoreDecorator(cantEditSate)];

export const DarkCantEdit = Template.bind({});
DarkCantEdit.args = {};

DarkCantEdit.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(cantEditSate)];

export const PurpleCantEdit = Template.bind({});
PurpleCantEdit.args = {};

PurpleCantEdit.decorators = [ThemeDecorator(Theme.PURPLE), StoreDecorator(cantEditSate)];
