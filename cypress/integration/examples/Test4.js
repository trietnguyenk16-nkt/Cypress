// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My fourth test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cypress automatically accept and confirm alert popup
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.wait(2000)

        //get text from alert popup
        //https://docs.cypress.io/api/events/catalog-of-events
        //cypress also has capability to listen to browser events, window:alert is the event which get fired on alert open
        // so you are firing the event through cypress, to get access to that alert
        
        //type 1: accept alert
        cy.on('window:alert', (str) =>  {
            //Mocha
            //Compare 2 strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //type 2: confirm alert
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            //cy.get('button').click()
        })

})
})