/// <reference types="cypress" />

it('reloads the page until it shows Bananas', () => {
  // visit the page "/"
  // https://on.cypress.io/visit
  // if it shows the fruit "Bananas", stop
  //
  // else
  //   wait for 1 second for clarity
  //   reload the page
  //   check again
  //
  // Tip: use the commands like
  // https://on.cypress.io/get
  // https://on.cypress.io/invoke
  // https://on.cypress.io/then
  // https://on.cypress.io/wait
  // https://on.cypress.io/reload
  //
  // Tip 2: use recursion
  cy.visit('/')
  function checkFruit() {
    cy.get('#fruit')
      .should('not.have.text', 'loading...')
      .invoke('text')
      .then((fruit) => {
        if (fruit === 'Bananas') {
          cy.log('Bananas!')
        } else {
          cy.log(fruit)
          cy.wait(500)
          // calling the function
          cy.reload().then(checkFruit)
        }
      })
  }
  // wrapping in function enables it to reiterate and to call it again within the function
  checkFruit()
})
