// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My seventh test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')




        //Handling Mouse hover popups using Cypress
        //Way1
        //Force a click regardless of its actionable state: https://docs.cypress.io/api/commands/click#Position
        //Top button is in hidden mode, but click with force=true, cypress will talk to DOM and understand that Top button is in hidden mode
        cy.contains('Top').click({force:true})
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top')
        cy.url().should('include','#top')



        //Way2
        //Mouse hover events are not supported in cypress. Alternatively use jquery or force click (in way1 above)
        //https://api.jquery.com/show/ or https://www.w3schools.com/jquery/eff_show.asp
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top')
        cy.url().should('include','#top')
        
})
})