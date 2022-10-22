// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My second test suite!', function() {

    it('My first test case!', function() {
        const veg = 'Capsicum'

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').as('productLocator')
        cy.get('@productLocator').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        //parent child chainning
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products>.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name').text()
            //textVeg.includes('Capsicum') the same str.contains() in java
            if (textVeg == 'Capsicum') {
                cy.wrap($el).find('button[type="button"]').click()
                //cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        cy.get('a.cart-icon').click()
        cy.wait(2000)
        cy.get('ul.cart-items>li:visible').each(($el, index, $list) => {
                cy.wrap($el).find('.product-name').should('have.text',veg)
        })
        cy.get('button').contains('PROCEED TO CHECKOUT').click()

        cy.wait(2000)
        cy.get('table>tbody>tr').each(($el, index, $list) => {
            cy.wrap($el).find('td').eq(1).find('.product-name').should('have.text', veg)
        })

        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.contains('Proceed').should('be.visible')
})
})