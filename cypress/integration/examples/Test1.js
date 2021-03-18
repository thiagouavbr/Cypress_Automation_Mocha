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

  it('should add cashews for the cart', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    //Iterating over the products to find Cashews
    cy.get('.products').find('.product').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.find('h4.product-name').text().includes('Cashews')) {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el.find('button')).click()
      }
    })
    cy.get(':nth-child(1) > :nth-child(3) > strong').should('have.text', '1')
    //cy.contains('ADD TO CART').click()
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()

  })

})