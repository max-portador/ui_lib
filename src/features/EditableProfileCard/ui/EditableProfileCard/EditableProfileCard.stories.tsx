import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/avatar.jpeg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StateSchema } from '@/app/providers/StoreProvider';
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

const cantEditSate: DeepPartial<StateSchema> = {
    ...initialState,
    user: undefined,
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <div className="story-wrapper">
        <EditableProfileCard {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator(initialState)];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};

NormalRedesigned.decorators = [
    StoreDecorator(initialState),
    NewDesignDecorator,
];
export const CantEdit = Template.bind({});
CantEdit.args = {};

CantEdit.decorators = [StoreDecorator(cantEditSate)];
