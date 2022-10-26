/// <reference types="cypress" />

it('shows the fruit returned from the test', () => {
  // stub the network call the application makes
  // to the server using "GET /fruit"
  // return "Kiwi" json object
  // tip: use https://on.cypress.io/intercept
  //
  const fruit = "Kiwi"
  cy.intercept('/fruit', {body : {fruit: fruit}}).as('fruitGet')
  cy.visit('/')
  cy.wait('@fruitGet')
  cy.contains('#fruit', fruit)

  // visit the page
  // https://on.cypress.io/visit
  //
  // wait for the app to make the network call
  // to make sure the stub was used
  // https://on.cypress.io/wait
  //
  // confirm the application shows the fruit "Kiwi"
  // https://on.cypress.io/contains
})
