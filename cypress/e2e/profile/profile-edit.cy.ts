import { selectByTestId } from '../../helpers/selectByTestId';
import { getRouteProfile } from '@/shared/const/router';

let profileId: string = '';

describe('Пользователь заходит на страницу пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('testuser', '123').then((data) => {
            profileId = data.id;
            cy.visit(getRouteProfile(profileId));
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.get(selectByTestId('ProfileCard.firstname')).should(
            'have.value',
            'test',
        );
    });
    it('И редактирует его', () => {
        const newName = 'noble';
        const newLastName = 'lastname';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastName,
        );
    });
});
