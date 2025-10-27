import loginPage from "../pages/loginPage"

describe('Desafio nstech - Sauce Demo', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Login - Validar acesso com usuario valido', () => {
      loginPage.loginUsuarioOK()
      cy.get('.title').should('have.text', 'Products')
    })
  
    it('Login - Validar acesso com usuario invalido', () => {
      loginPage.loginUsuarioInvalido()
      loginPage.getMensagemErroLabel().should('is.visible').and('contain.text', 'Username and password do not match any user in this service')
    })
})