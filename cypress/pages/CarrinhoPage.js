class carrinhoPage {
    elements = {
        checkoutButton: () => cy.get('.btn_action'),
    }

    clicarEmCheckout() {
        this.elements.checkoutButton().click()
    }
}

module.exports = new carrinhoPage()