// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('This is Hooks suite', function() {
    before(() => {
        cy.log('BEFORE HOOK')
    })

    beforeEach(() => {
        cy.log('BEFORE EACH HOOK')
    })

    it('This is Hook 1 TC', function() {
        cy.log('Hook 1')
    })

    it('This is Hook 2 TC', function() {
        cy.log('Hook 2')
    })

    it('This is Hook 3 TC', function() {
        cy.log('Hook 3')
    })

    

    after(() => {
        cy.log('AFTER HOOK')
    })

    afterEach(() => {
        cy.log('AFTER EACH HOOK')
    })

})