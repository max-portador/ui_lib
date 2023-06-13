export const setRate = (starCount = 5, text = 'feedback') => {
    cy.getByTestId(`StarRating.${starCount}`).click();
    cy.getByTestId('RatingCard.Input').type(text);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starCount: number, text: string): Chainable<void>;
        }
    }
}
