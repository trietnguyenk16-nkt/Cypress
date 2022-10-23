// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My fifth test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Child tab with combination of Cypress and Jquery
        // NOTE Cypress can only handle the new page open in the same browser/tab, if new page open in another tab it cannot handle
        // => So we should make  browser to open new page in the same browser/tab by remove target attribute
        // => Cypress have ability to manipulate the DOM
        // => Remove attribute method is not supported in cypress but Jquery supports removeAttr method and Cypress supports Jquery
        // => So in Cypress they support a method call invoke which can call a jquery method and removeAttr is attribute method to remove an attribute (in this case remove target attribute)
        //https://docs.cypress.io/api/commands/invoke
        //https://api.jquery.com/removeattr/  or https://www.w3schools.com/jquery/html_removeattr.asp
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('eq', 'https://www.rahulshettyacademy.com/')
        //Navigating browser controls using cypress
        //https://docs.cypress.io/api/commands/go
        cy.go('back')
        cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')

})
})