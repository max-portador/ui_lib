import { getRouteProfile, getRouteArticles } from '@/shared/const/router';

describe('Роутинг', () => {
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });
        it('Переход: открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });
        it('Переход: открывает страницу со списком статей', () => {
            cy.visit(getRouteArticles());
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });

    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Переход: открывает страницу профиля', () => {
            cy.visit(getRouteProfile('1'));
            cy.getByTestId('MainPage').should('exist');
        });

        it('Переход: открывает несуществующую страницу', () => {
            cy.visit('/noble');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });
});
