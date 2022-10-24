// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('This is Read Attribute and Assert suite', function() {
    before(() => {

        //fixture returns json file with promise so we need to resolve and store it infomartion in data object
        cy.fixture('example2').then(function(data){
            this.data = data
        })
    })


    it('My First TC', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)

        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)

        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength', '2')

        //cy.get('input[name="name"]:nth-child(2)').invoke('attr','minlength').should('have.text','2') //NEED TO INVESTIGATE WHY THROW ERROR
        //ALSO, NEED TO KNOW WHAT IS DIFFERENT ABOUT PROP AND ATTR
        cy.get('input[name="name"]:nth-child(2)').then(function(el) {
            const minlength = el.attr('minlength')
            cy.log(minlength)
            expect(minlength).equal('2')
        })

        cy.get('#inlineRadio3').should('have.attr','disabled')
        cy.get('#inlineRadio3').should('be.disabled')
    
    })



})