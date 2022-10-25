class CheckOutPage {
    getCheckoutButton() {
        return cy.contains('Checkout')
    }


    getCountryTextBox() {
        return cy.get('#country')
    }

    getCountrySuggestion() {
        return cy.get('.suggestions>ul>li>a')
    }

    getAgreeCheckbox() {
        //return cy.get('label[for="checkbox2"]')
        return cy.get('#checkbox2')
    }

    getPurchaseButton() {
        return cy.get("input[value='Purchase']")
    }

    selectCountryFromSuggestion(country) {
        this.getCountrySuggestion().each(($el, index, $list) => {
            if ($el.text() == country) {
                this.getCountrySuggestion().contains(country).click()
            }
        })
    }


}

export default CheckOutPage