/// <reference types="cypress" />

it('makes GET /fruit requests every minute', () => {
  // spy on the GET /fruit endpoint
  // use the cy.clock command to freeze the timers in the app
  // https://on.cypress.io/clock
  // visit the page
  // wait for the first request to finish and confirm the fruit
  // advance the clock by one minute using cy.tick command
  // https://on.cypress.io/tick
  // wait for the second request to finish and confirm the fruit
  // advance the clock by one minute one more time
  // wait for the network call and confirm the fruit
  cy.intercept('GET', '/fruit').as('fruit')
  cy.clock()
  cy.visit('/')
  cy.wait('@fruit').its('response.body.fruit').then((fruit) => {
    cy.contains('#fruit', fruit).should('be.visible')
  })
  cy.tick(60_000)
  cy.wait('@fruit').its('response.body.fruit').then((fruit) => {
    cy.contains('#fruit', fruit).should('be.visible')
  })
  cy.tick(60_000)
  cy.wait('@fruit').its('response.body.fruit').then((fruit) => {
    cy.contains('#fruit', fruit).should('be.visible')
  })


})
