//For visual Studio suggestions
/// <reference types="Cypress" />

describe('Test Suite 1', function () {
  it('Test Case 1', function () {
    //Test Step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //fixture will be learn in the future
    cy.get('.search-keyword').type('ca')
    //Should is a command from chai library
    cy.wait(2000)
    // This is not working , have 5 elements if consider just class product because one is invisible
    //cy.get('.product').should('have.length', 4)
    cy.get('.product:visible').should('have.length', 4)

  })

})