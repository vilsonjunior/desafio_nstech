class loginPage {
    elements = {
        usuarioInput: () => cy.get('[data-test="username"]'),
        senhaInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('#login-button'),
        mensagemErroLabel: () => cy.get('[data-test="error"]')
    }

    loginUsuarioOK() {
        this.elements.usuarioInput().type('standard_user')
        this.elements.senhaInput().type("secret_sauce")
        this.elements.loginButton().click()
    }

    loginUsuarioInvalido() {
        this.elements.usuarioInput().type('user_invalid')
        this.elements.senhaInput().type('secret_sauce')
        this.elements.loginButton().click()
    }

    getMensagemErroLabel() {
        return this.elements.mensagemErroLabel()
    }
}

module.exports = new loginPage();