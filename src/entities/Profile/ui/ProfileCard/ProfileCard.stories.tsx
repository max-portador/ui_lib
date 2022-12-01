import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.jpeg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <div className="story-wrapper">
        <ProfileCard {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
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
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
