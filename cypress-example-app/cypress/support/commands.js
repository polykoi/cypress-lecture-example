Cypress.Commands.add('chooseOption', {
  prevSubject: true,
}, (subject, optionTitle) => {
  cy.wrap(subject).click()
  cy.get('.ant-select-dropdown').contains(optionTitle).click();
});

Cypress.Commands.add('incrementNumber', {
  prevSubject: true,
}, (subject, optionTitle) => {
  cy.wrap(subject).parents('.ant-input-number').find('.ant-input-number-handler-up').click();
});
