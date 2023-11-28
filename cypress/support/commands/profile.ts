export const updateProfile = (username: string, password: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCardDeprecated.firstname').clear().type(username);
    cy.getByTestId('ProfileCardDeprecated.lastname').clear().type(password);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8001/profile/${profileId}`,
        headers: { Authorization: 'adfgsdgsr' },
        body: {
            id: '4',
            age: 45,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
            firstName: 'test',
            lastName: 'user',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(username: string, password: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
