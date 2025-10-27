class informacoesPage {
    elements = {
        nomeInput: () => cy.get('[data-test="firstName"]'),
        sobrenomeInput: () => cy.get('[data-test="lastName"]'),
        cepInput: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('.btn_primary')
    }

    preencherInformacoes() {
        this.elements.nomeInput().type('Vilson')
        this.elements.sobrenomeInput().type('Teste nstech')
        this.elements.cepInput().type('12345-678')
        this.elements.continueButton().click()
    }
}

module.exports = new informacoesPage()