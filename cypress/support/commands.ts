import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleListCommands from './commands/article-list';
import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comment';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleListCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//
//     if (FIXTURE_MODE === 'READ') {
//         // readFixture(fixtureName)
//         // do smth
//     }
//
//     if (FIXTURE_MODE === 'WRITE') {
//         // const fixtureName = req.METHOD + req.url + hash(req.body)
//         // createFixture(fixtureName, req.body)
//         // do smth
//     }
// });
