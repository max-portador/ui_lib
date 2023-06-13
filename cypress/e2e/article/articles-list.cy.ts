import { getRouteArticles } from '../../../src/shared/const/router';

describe('Список статей', () => {
    beforeEach(() => {
        cy.login('testuser', '123').then((data) => {
            cy.visit(getRouteArticles());
        });
    });
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});
