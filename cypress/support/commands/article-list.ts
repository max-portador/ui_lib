export const clearFilters = (
    defaultSortValue: string,
    defaultOrderValue: string,
) => {
    cy.getByTestId('ArticleListSearch').clear();
    cy.getByTestId('ArticleListSelector.sort').select(defaultSortValue);
    cy.getByTestId('ArticleListSelector.order').select(defaultOrderValue);
    cy.getByTestId('ArticleListTab.ALL').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            clearFilters(
                defaultSortValue: string,
                defaultOrderValue: string,
            ): Chainable<void>;
        }
    }
}
