// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My nineth test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Handling Frames with Cypress

        //npm install -D cypress-iframe

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('.inner-box>h1').should('have.text', 'Mentorship')
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})