/// <reference types="cypress" />

it('does not call API until 60 seconds passed', () => {
  // spy on the GET /fruit call and pass a cy.spy function
  // as the request handler. The callback function does nothing
  // but we can use it later (via an alias) to check how
  // many times it was called = how many times the network
  // call happened
  // see https://on.cypress.io/spy
  // see https://on.cypress.io/stubs-spies-and-clocks
  // freeze the clock
  // visit the page
  // get the spy via its alias and confirm it was called once
  // then reset the history of calls
  // tick 59 seconds
  // confirm the spy was not executed = there were no network calls
  // tick 1 second
  // confirm the spy was executed = there was a network call
  cy.intercept('GET', '/fruit', cy.spy().as('fruit'))
  cy.clock()
  cy.visit('/')

  cy.get('@fruit')
    .should('have.been.calledOnce')
    .invoke('resetHistory')
  cy.tick(59_000)
  cy.get('@fruit').should('not.have.been.called')
  cy.tick(1_000)
  cy.get('@fruit').should('have.been.calledOnce')
})
