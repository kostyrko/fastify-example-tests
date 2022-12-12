/// <reference types="cypress" />

it('uses the fixture to stub and check the page', () => {
  cy.fixture('apple.json')
  .then(cy.log)
  .then((data) => {
    // using the command https://on.cypress.io/fixture
    cy.intercept('GET', '/fruit', {
      fixture: 'apple.json',
    })
    // intercept the GET call to /fruit with fixture "apple.json"
    // visit the site
    cy.visit('/')
    // confirm the fruit from the fixture is shown on the page
    cy.contains('#fruit', data.fruit).should('be.visible')
  })
})
