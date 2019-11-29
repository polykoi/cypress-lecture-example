import Factory from '../utils/Factory';

describe('Providers List View', () => {
  const assertUserListLength = (length) => {
    cy.get('h1').should('contain', `Users ${length}`);
    cy.get('li.ant-list-item').should('have.length', length);
  };

  beforeEach(() => {
    // commented out since there is no back in this example
    // cy.clean();
    // cy.factories(
    //   Factory.create('user', {
    //     role: 'admin',
    //     email: 'test@test.com',
    //     password: 'TESTtest',
    //     firstName: 'Whitney',
    //     lastName: 'Ward',
    //   }).value,
    //   Factory.create_list('user', 4).value,
    // );
    cy.server();
    cy.route('DELETE', '**/api/users/**').as('deleteUser');
  });

  it('view the list of users', () => {
    cy.visit('/users');

    assertUserListLength(5)
    cy.get('li.ant-list-item').eq(0).within(() => {
      cy.get('.ant-list-item-meta-title').should('contain', 'Whitney Ward');
      cy.get('.ant-list-item-meta-description').should('contain', 'admin');
    });

    cy.get('li.ant-list-item')
      .eq(1)
      .find('.ant-list-item-meta-description')
      .should('not.exist');
  });

  it('delete user', () => {
    cy.visit('/users');

    assertUserListLength(5)
    cy.get('li.ant-list-item').eq(0).find('[data-cy=delete-user]').should('not.exist');
    cy.get('li.ant-list-item').eq(1).find('[data-cy=delete-user]').click();

    // commented out since there is no back in this example
    // cy.wait('@deleteUser');

    assertUserListLength(4)
  });
});
