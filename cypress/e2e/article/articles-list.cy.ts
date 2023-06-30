import { getRouteArticles } from '../../../src/shared/const/router';

const ByCreate = 'createdAt';
const ByViews = 'views';
const ByTitle = 'title';

describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login('testuser', '123').then((data) => {
            cy.visit(getRouteArticles());
        });
    });

    afterEach(() => {
        cy.clearFilters(ByCreate, 'asc');
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('и тест должен упасть', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.getByTestId('NoExist').should('exist');
    });
    it.skip('пользователь вводит поиск по слову и остается одна статья', () => {
        cy.getByTestId('ArticleListSearch')
            .should('exist')
            .clear()
            .type('golang');
        cy.getByTestId('ArticleListItem').should('have.length', 1);
    });
    it.skip(
        'пользователь выбирает порядок сортировки по названию' +
            ' в убывающем порядке и иметь количество просмотров 1022',
        () => {
            cy.getByTestId('ArticleListSelector.sort')
                .should('exist')
                .select(ByTitle);
            cy.getByTestId('ArticleListSelector.order').select('desc');
            cy.getByTestId('ArticleViewsCount.Paragraph').should(
                'contain.text',
                '1022',
            );
        },
    );
    it.skip('пользователь выбирает таб IT', () => {
        cy.getByTestId('ArticleListTab.IT').should('exist').click();
        cy.getByTestId('ArticleListItem').should('have.length.at.least', 4);
    });
});
