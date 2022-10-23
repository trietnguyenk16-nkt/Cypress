// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My eighth test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Child Windows using Cypress
        //cy.log(cy.get('#opentab').invoke('prop', 'href'))

        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })


})
})