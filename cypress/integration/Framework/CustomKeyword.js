// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('This is Custom Keyword suite', function() {
    before(() => {

        //fixture returns json file with promise so we need to resolve and store it infomartion in data object
        cy.fixture('example2').then(function(data){
            this.data = data
        })
    })

    //Way1
    // it('My First TC', function() {
    //     cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    //     cy.get('.card-title>a').each(($el, index, $list) => {
    //         const product = $el.text()
    //         if (product.includes('Blackberry')) {
    //             cy.get('.card-footer>button').eq(index).click()
    //         }
    //     })
        
    // })

    //Way2: use custom keyword
    it('My First TC', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        cy.selectProduct('Blackberry')
        
    })


})