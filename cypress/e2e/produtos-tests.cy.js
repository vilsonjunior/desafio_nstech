import loginPage from "../pages/loginPage"
import productsPage from "../pages/ProductsPage"

describe('Desafio nstech - Sauce Demo', () => {
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginUsuarioOK()
    })

    it('Visualizacao Produtos - Validar lista de produtos', () => {
        productsPage.getListaProdutosLabel().should('be.visible')
    })

    it('Adicionar ao Carrinho - Validar produto adicionado ao carrinho', () => {
        productsPage.adicionarItemNoCarrinho()
        productsPage.getQuantidadeItemCarrinho().should('be.visible').and('have.text', '1')
    })

    it('Remover do Carrinho - Validar produto removido do carrinho', () => {
        productsPage.adicionarItemNoCarrinho()
        productsPage.getQuantidadeItemCarrinho().should('contain.text', '1')
        productsPage.removerItemDoCarrinho()
        productsPage.getCarrinhoVazio().should('not.contain.text', '1')
    })
})