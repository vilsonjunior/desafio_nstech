class productsPage {
    elements = {
        produtosLabel: () => cy.get(':nth-child(1) > #inventory_container'),
        adicionarNoCarrinhoButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        contadorItemCarrinhoLabel: () => cy.get('.shopping_cart_link'),
        removerItemButton: () => cy.get('.btn_secondary'),
        modalCarrinhoLabel: () => cy.get('#header_container'),
        selecionarItem: () => cy.get('#item_4_img_link > .inventory_item_img')
    }

    getListaProdutosLabel() {
        return this.elements.produtosLabel()
    }

    clicarItemCarrinhoLabel() {
        this.elements.contadorItemCarrinhoLabel().click()
    }

    adicionarItemNoCarrinho() {
        this.elements.adicionarNoCarrinhoButton().click()
    }

    getQuantidadeItemCarrinho() {
        return this.elements.contadorItemCarrinhoLabel()
    }

    removerItemDoCarrinho() {
        this.elements.removerItemButton().click()        
    }

    getCarrinhoVazio() {
        return this.elements.modalCarrinhoLabel()
    }
}

module.exports = new productsPage()