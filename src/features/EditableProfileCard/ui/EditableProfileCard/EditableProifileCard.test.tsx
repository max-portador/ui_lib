import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'whatwg-fetch';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard, Profile, profileReducer } from '@/features/EditableProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    firstName: 'admin',
    lastName: 'admin',
    age: 366,
    currency: Currency.GEL,
    country: Country.Georgia,
    city: 'Batumi',
    username: 'admin123',
};

describe('EditableProfileCard tests', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
                user: {
                    authData: { id: '1', username: 'admin' },
                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
    });

    it('should render Cancel Button in the DOM on click on Edit Button', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    it('should cancel changes after Cancel Button was clicked', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        const inputFirstName = screen.getByTestId('ProfileCard.firstname');
        const inputLastName = screen.getByTestId('ProfileCard.lastname');

        await userEvent.clear(inputFirstName);
        await userEvent.clear(inputLastName);

        await userEvent.type(inputFirstName, 'user');
        await userEvent.type(inputLastName, 'user');

        expect(inputFirstName).toHaveValue('user');
        expect(inputLastName).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(inputFirstName).toHaveValue('admin');
        expect(inputLastName).toHaveValue('admin');
    });

    it('should render Error on invalid input values', async () => {
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    it('should send data on server after SaveButton was clicked', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        const inputFirstName = screen.getByTestId('ProfileCard.firstname');
        await userEvent.clear(inputFirstName);

        await userEvent.type(inputFirstName, 'user');

        expect(inputFirstName).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
