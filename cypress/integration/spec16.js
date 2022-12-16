/// <reference types="cypress" />

it('requests all fruits', () => {
  // request the fruit from the /fruit endpoint
  // using the https://on.cypress.io/request command
  // from the response get the body object, then the fruit
  // using the https://on.cypress.io/its command
  // store each fruit in a Set object
  // and keep requesting until we see a fruit already in the set
  // print the collected list of fruits
  const fruits = new Set()
  function getTheFruit() {
    cy.request('/fruits')
      its('body.fruit')
      .then(fruits => {
        if (fruit.has(fruit)) {
          ([...fruits].sort().join(', '))
        } else {
          fruits.add(fruit)
          cy.wait(1000).then(getTheFruit)
        }
      })
  }
  getTheFruit()
})
