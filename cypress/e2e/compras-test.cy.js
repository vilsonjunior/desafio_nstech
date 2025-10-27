import loginPage from "../pages/loginPage"
import comprasPage from "../pages/ComprasPage"
import detalheCompraPage from "../pages/DetalheCompraPage"

describe('Desafio nstech - Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginUsuarioOK()
    })

    it('Finalizar Compra - Validar realizacao de compra de item', () => {
        comprasPage.realizarFluxoDeCompra()
        detalheCompraPage.getTextoDePedidoRealizado().should('have.text', 'Thank you for your order!')
    })
})