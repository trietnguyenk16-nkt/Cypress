class ShopPage {

    getListOfCardTitle() {
        return cy.get('.card-title>a')
    }

    getAddToCartButton() {
        return cy.get('.card-footer>button')
    }

    getCheckoutButton() {
        return cy.get("li[class*='nav-item']>a[class*='btn-primary']")
    }

    selectProduct(productName) {
        this.getListOfCardTitle().each(($el, index, $list) => {
            const product = $el.text()
            if (product.includes(productName)) {
                this.getAddToCartButton().eq(index).click()
            }
        })

    }
    
}

export default ShopPage