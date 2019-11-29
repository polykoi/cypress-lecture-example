describe('Create Product', () => {
  it('view the list of users', () => {
    cy.visit('/products/create');

    cy.get('#product-form_name').type('Nice jacket');

    // Without custom command:
    // cy.get('#product-form_type').click()
    // cy.get('.ant-select-dropdown').contains('Jackets').click();
    cy.get('#product-form_type').chooseOption('Jackets')

    // Without custom command:
    // cy.get('#product-form_input-number').parents('.ant-input-number').find('.ant-input-number-handler-up').click();
    cy.get('#product-form_input-number').incrementNumber();
    cy.get('[data-cy=product-form-submit]').click();
  });
});
