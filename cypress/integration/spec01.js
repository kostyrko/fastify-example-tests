// make sure the IntelliSense works in this JavaScript spec file
/// <reference types="Cypress" />

it('shows some fruit', () => {
  cy.visit('/');
  cy.get('#fruit')
  .should('not.contain', 'loading...')
  .invoke('text')
  .then(text => {
    // expect(text).to.be.an('string')
    expect(text).to.match(/^[A-Z][a-z]+$/)
  })
})
