import {Article} from "@/entities/Article";

const defaultArticle = {
    "title": "TEST ARTICLE",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    "views": 1022,
    "createdAt": "26.04.2022",
    "userId": "1",
    "type": [
        "IT"
    ],
    "blocks": []
}


export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: `http://localhost:8001/articles`,
        headers: {Authorization: 'adfgsdgsr'},
        body: article ?? defaultArticle,
    }).then((res) => res.body)
};

export const deleteArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8001/articles/${articleId}`,
        headers: {Authorization: 'adfgsdgsr'},
    })
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
