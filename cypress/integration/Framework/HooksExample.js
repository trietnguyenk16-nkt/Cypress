// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('This is Hooks Example suite', function() {
    before(() => {

        //fixture returns json file with promise so we need to resolve and store it infomartion in data object
        cy.fixture('example2').then(function(data){
            this.data = data
        })
    })


    it('My First TC', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(1)').type(this.data.name)

        cy.get('#exampleFormControlSelect1').select(this.data.gender)
    })



})