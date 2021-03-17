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
    //cy.get('.product').should('have.length', 4)// This is not working , because have 5 elements if consider just class product
    cy.get('.product[class="product"]').should('have.length', 4)

  })

})