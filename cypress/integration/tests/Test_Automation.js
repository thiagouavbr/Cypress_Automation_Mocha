//For visual Studio suggestions
/// <reference types="Cypress" />

describe('Buying Products', function () {
  it("Automation", function () {
    //Test Step
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //Checkbox + check + test
    cy.get('#checkBoxOption1').should('have.value', 'option1').check().should('be.checked')
    cy.get('#checkBoxOption1').should('have.value', 'option1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1', 'option3'])
    cy.get('input[type="checkbox"]').check(['checkBoxOption2'])

  });


});