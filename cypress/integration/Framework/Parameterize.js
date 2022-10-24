// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('This is Custom Keyword suite', function() {
    before(() => {

        //fixture returns json file with promise so we need to resolve and store it infomartion in data object
        cy.fixture('products').then(function(data){
            this.data = data
        })
    })

    
    it('My First TC', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')

        //Way 1 of for loop in javascript
        for (let i = 0; i < this.data.productName.length; i++) {
            cy.selectProduct(this.data.productName[i])
        }

        //Way 2 of Array.forEach() in javascript
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        
        
    })


})