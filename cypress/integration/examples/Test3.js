// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My third test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1').uncheck().should('not.be.checked').and('have.value','option1')
        //cy.get('input[type="checkbox"]').check() //check all checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])//check checkboxes with value: option 2 and option 3
        cy.wait(2000)

        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1').find('li').each(($el, index, $list) => {
            if ($el.text() == 'India') {
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')


        //Handling Visible and Invisible elements using Assertions 
        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should('be.visible')

        //Radio buttons
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')
       // cy.get('.radioButton').check(['radio1']).should('be.checked').and('have.value','radio1')
    }) 
})