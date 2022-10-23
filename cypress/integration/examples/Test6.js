// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My sixth test suite!', function() {
    it('My first test case!', function() {

    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Web tables with Cypress using each command
        cy.get('table[name="courses"]>tbody>tr').each(($el, index, $list) => {
            
            //Way1
            if ($el.find('td').eq(1).text() == 'Master Selenium Automation in simple Python Language') {
                cy.wrap($el).find('td').eq(2).should('have.text', '25')
            }

            //Way2
            if ($el.find('td:nth-child(2)').text() == 'Master Selenium Automation in simple Python Language') {
                cy.wrap($el).find('td:nth-child(3)').should('have.text', 25)
            }


            
        })

        //Way3
        cy.get('table[name="courses"]>tbody>tr>td:nth-child(2)').each(($el, index, $list) => {
            if ($el.text() == 'Master Selenium Automation in simple Python Language') {
                //next():Get the immediately following sibling of each DOM element within a set of DOM elements.
                //travel to sibling with next() and it works only on cy.get() method
                //https://docs.cypress.io/api/commands/next 
                //cy.wrap($el).next().should('have.text', 25)

                //cy.get('table[name="courses"]>tbody>tr>td:nth-child(2)').eq(index).next().should('have.text', '25')
                cy.get('table[name="courses"]>tbody>tr>td:nth-child(2)').eq(index).next().then(function(price) {
                    expect(price.text()).to.eq('25')
                }) 
                        
            }
        })
})
})