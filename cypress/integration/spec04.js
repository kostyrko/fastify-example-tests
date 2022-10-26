/// <reference types="cypress" />

it('clearly shows the loading element', () => {
  // stub the network call the application makes
  // and delay returning the fruit by 2 seconds
  // https://on.cypress.io/intercept
  //
  // visit the page
  // https://on.cypress.io/visit
  cy.clock()
  const fruit = "Kiwi"
  cy.intercept('/fruit', {body : {fruit: fruit}, delay: 2000,}).as('fruitGet')
  cy.visit('/')
  cy.get('#fruit')
    .should('be.visible')
    .and('have.text', 'loading...')
  cy.get('#fruit').should('not.contain', 'loading')
  cy.contains('#fruit', fruit).should('be.visible')

  //
  // check if the loading element is visible
  // and then does not exist
  // https://on.cypress.io/get
  // https://on.cypress.io/should
  //
  // confirm the displayed fruit
  // https://on.cypress.io/contains
})
