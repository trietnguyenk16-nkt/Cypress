// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CheckOutPage from '../../support/pageObjects/CheckOutPage'
describe('This is Page Object Example suite', function() {
    before(() => {

        //fixture returns json file with promise so we need to resolve and store it infomartion in data object
        cy.fixture('products').then(function(data){
            this.data = data
        })
    })


    it('My First TC', function() {
        Cypress.config('defaultCommandTimeout', 8000)
        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        const checkoutPage = new CheckOutPage()

        cy.visit(Cypress.env('url'))

        //homePage.getEditBox().type(this.data.name)
        homePage.typeToEditBox(this.data.name)

        homePage.getGender().select(this.data.gender)

        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        homePage.getEditBox().should('have.attr','minlength', '2')

        //cy.get('input[name="name"]:nth-child(2)').invoke('attr','minlength').should('have.text','2') //NEED TO INVESTIGATE WHY THROW ERROR
        //ALSO, NEED TO KNOW WHAT IS DIFFERENT ABOUT PROP AND ATTR
        homePage.getEditBox().then(function(el) {
            const minlength = el.attr('minlength')
            cy.log(minlength)
            expect(minlength).equal('2')
        })

        homePage.getRadioButton().should('have.attr','disabled')
        homePage.getRadioButton().should('be.disabled')
        
        homePage.getShopTab().click()

        // productsPage.getListOfCardTitle().each(($el, index, $list) => {
        //     const product = $el.text()
        //     if (product.includes('Blackberry')) {
        //         productsPage.getAddToCartButton().eq(index).click()
        //     }
        // })

        //productsPage.selectProduct('Blackberry')
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productsPage.getCheckoutButton().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, list) => {
            const priceText = $el.text()
            const myArray = priceText.split(" ");
            let price = myArray[1]
            sum += Number(price)
        })

        cy.get('tr td:nth-child(5) strong').then(function(el) {
            const myArray = el.text().split(" ");
            var priceTotal = Number(myArray[1])
            expect(sum).to.equal(priceTotal)
        })

        checkoutPage.getCheckoutButton().click()
        
        const countryType = 'ind'
        const country = 'India'
        checkoutPage.getCountryTextBox().type(countryType)
        checkoutPage.selectCountryFromSuggestion(country)
        checkoutPage.getAgreeCheckbox().click({force: true})
        checkoutPage.getPurchaseButton().click()

        cy.get('.alert').then(function(elm) {
            expect(elm.text().includes('Success')).to.be.true
        })
    })



})