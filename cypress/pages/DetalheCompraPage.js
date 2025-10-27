class detalheCompraPage {
    elements = {
        finalizarButton: () => cy.get('.btn_action'),
        pedidoRealizadoText: () => cy.get('.complete-header')        
    }

    confirmarDetalhesDaCompra() {
        this.elements.finalizarButton().click()
    }

    getTextoDePedidoRealizado() {
        return this.elements.pedidoRealizadoText()
    }
}

module.exports = new detalheCompraPage()