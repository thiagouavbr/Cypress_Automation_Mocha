//For visual Studio suggestions
/// <reference types="Cypress" />

describe('Buying Products', function () {
  it.skip('should have 4 visible products for the \'ca\' searching', function () {
    //Test Step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //fixture will be learn in the future
    cy.get('.search-keyword').type('ca')
    //Should is a command from chai library
    cy.wait(2000)
    // This is not working , have 5 elements if consider just class product because one is invisible
    //cy.get('.product').should('have.length', 4)
    //Checking the visible
    cy.get('.product:visible').should('have.length', 4)
    //Chaining the child
    cy.get('.products').find('.product').should('have.length', 4)

  })

  it('should add products for the cart', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.products').find('.product').contains('Carrot - 1 Kg').should('have.text', 'Carrot - 1 Kg')

  })

})