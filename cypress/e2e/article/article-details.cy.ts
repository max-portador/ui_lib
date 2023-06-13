import { getRouteArticleDetails } from '@/shared/const/router';

describe('Пользователь заходит на страницу статьи', () => {
    let articleId = ' ';
    beforeEach(() => {
        cy.login('testuser', '123');
        cy.createArticle().then((data) => {
            articleId = data.id;
        });
    });
    afterEach(() => {
        cy.deleteArticle(articleId);
    });
    it('и она открывается', () => {
        cy.visit(getRouteArticleDetails(articleId));
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('и видит список рекомендаций', () => {
        cy.visit(getRouteArticleDetails(articleId));
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('и оставляет комментарий', () => {
        cy.visit(getRouteArticleDetails(articleId));
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('TEST TEXT');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('и ставит оценку', () => {
        cy.visit(getRouteArticleDetails(articleId));
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
