/// <reference types="cypress" />

it('shows the loading element then fruit from a fixture', () => {
  // intercept the GET call to /fruit with fixture "apple.json"
  // https://on.cypress.io/intercept
  cy.intercept('GET', '/fruit', { fixture: 'apple.json' })
  const fruit = "apple"
  // visit the site
  // https://on.cypress.io/visit
  cy.visit('/')
  cy.get('#fruit')
    .should('include.text', 'loading...')

  cy.get('#fruit')
    .should('include.text', fruit)


  cy.contains('#fruit', 'loading...').should('not.exist')

  
})
