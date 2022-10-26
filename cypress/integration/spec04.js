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

// bonus - instead of stubbing the request, just delay it
it('slows down the /fruit request without stubbing it', () => {
  // instead of stubbing the request GET /fruit
  // return a Bluebird Promise that delays the action
  // by 2 seconds. After that Cypress will continue
  // with the network request going to the server
  // https://on.cypress.io/intercept
  // https://on.cypress.io/promise delay method
  // Hint: see the lesson spec10
  //
  // visit the page "/""
  //
  // check if the loading element is visible
  // and has the text "loading..."
  //
  // and then the fruit element should
  // not have the text "loading"
})
