// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My first test suite!', function() {

    it('My first test case!', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product').should('have.length',5)
        cy.get('.product').as('productLocator')//using alias (as is cypress command)
        cy.get('@productLocator').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        //parent child chainning
        cy.get('.products').find('.product').should('have.length',4)
        // Way 1: using index
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //can replace .get('.products').find('.product') with only simple css selector .get('.products>.product')

        // Way 2: using Each loop in array of DOM elements to find matched text
        cy.get('.products>.product').each(($el, index, $list) => {
            const textVeg = $el.find('.product-name').text()
            //textVeg.includes('Capsicum') the same str.contains() in java
            if (textVeg == 'Capsicum') {
                //NOTE: currently, when you use $el.find('.button').click(), the click button is deprecate and got a straight
                // this is because $el is returned with a promise
                // if we do not resolve a promise, the click will got a straight
                // so in order to resolve a promise, use wrap method. See below
                cy.wrap($el).find('button[type="button"]').click()
                //cy.wrap($el).contains('ADD TO CART').click()
            }
        })

        //NOTE: 
        // if we do commands in separate lines as below:
        // const logo = cy.get('.brand')
        // cy.log(logo.text())
        // => cypress test runner will return logo.text() is not a function
        // this is because cy.get has promise, and it is cypress commands so cypress technician already handled this promise
        // but logo.text (in a separate line) is your custom command and it has not ability to resolve a promise from const logo and accept logo input
        // the child method cy.log(logo.text()) is then break
        // => IMPORTANT: Non cypress commands cannot resvole promise by themselves. we need to manually resolve it by then()
        // => you must manually handle promise for constant logo by your self so that logo.text understand and has ability to handle a promise from const logo
        // you should also know promise is like a STATE with 3 status: RESOLVED, REJECTION and PENDING
        // => use keyword then to wait for promise is RESOLVED. See solution below:
        // cy.get('.brand').then(function(logo) {
            //cy.log(logo.text())
        //})

        //NOTE: 
        // cy.get('.products').find('.product')
        // cy.get is cypress command 
        // find is also cypress command
        // With the concatenation of 2 cypress commands
        // so the child commands (find()) can has ability to resolve the promise from cy.get and accept the parent input
        // however text() is not cypress command (its a jquery methods) so cy.get('.products').find('.product').text() will not work with TypeError: cy.get(...).find(...).text is not a function
        // you might wonder why  the .text() below can work
        //cy.get('.products>.product').each(($el, index, $list) => {
        //   const textVeg = $el.find('.product-name').text()
        //})
        // this is because in each, $el we already resolved the promise (index returning is resolved and not the promise anymore so it can has ability to understand

        //(Cypress commands yield jQuery objects so you can use cy.get('.products').find('.product') with .text() but the .text() is jquery cannot resolved promises so its break )
		//Reference: https://docs.cypress.io/faq/questions/using-cypress-faq
})
})