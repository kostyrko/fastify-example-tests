/// <reference types="cypress" />

it('shows the fruit returned by the server', () => {
  // spy on the network call the application makes
  // tip: use https://on.cypress.io/intercept
  //
  // visit the page
  // https://on.cypress.io/visit
  cy.intercept('/fruit').as('fruitGet')
  cy.visit('/')
  // wait for the app to make the network call
  // (there might be a delay)
  // https://on.cypress.io/wait
  cy.wait('@fruitGet').then((fruit) => {
    // expect(fruit.response.statusCode).to.equal(200)
    // cy.log(fruit.response.body.fruit)

    // works as well but doesn't use assertion
    cy.contains('#fruit', fruit.response.body.fruit)
    
    cy.get('#fruit').should('have.text', fruit.response.body.fruit)
  })
  // from the network call, get the response body
  // and the name of the fruit and confirm
  // the fruit is shown on the page
  // https://on.cypress.io/its
  // https://on.cypress.io/then
  // https://on.cypress.io/contains
})
