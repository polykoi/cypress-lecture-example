// Example of simple page object implementation for Cypress

class SignInPage {
  getEmailError = () => cy.get(`[data-cy=signInEmailError]`);
  getPasswordError = () => cy.get(`[data-cy=signInPasswordError]`);

  visit = () => cy.visit('/signin');

  fillEmail = (value) => {
    const field = cy.get(`[data-cy=signInEmailField]`);
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword = (value) => {
    const field = cy.get(`[data-cy=signInPasswordField]`);
    field.clear();
    field.type(value);

    return this;
  }

  submit = () => {
    const button = cy.get(`[data-cy=signInSubmitButton]`);
    button.click();
  }
}

export default SignInPage;

//--------------------------------------------------------------
// Usage

describe('Sign In', () => {
  it('should show an error message on empty input', () => {
    const signIn = new SignInPage();

    signIn.visit();

    signIn.submit();

    signIn.getEmailError()
      .should('exist')
      .contains('Email is required');

    signIn
      .getPasswordError()
      .should('exist')
      .contains('Password is required');
  });

  // more tests
});
