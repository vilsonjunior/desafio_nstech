import itemPage from "../pages/ItemPage"
import carrinhoPage from "../pages/CarrinhoPage"
import informacoesPage from "../pages/InformacoesPage"
import detalheCompraPage from "./DetalheCompraPage"

class comprasPage {

    realizarFluxoDeCompra() {
        itemPage.adicionarItemEAvancarParaOCarrinho()
        carrinhoPage.clicarEmCheckout()
        informacoesPage.preencherInformacoes()
        detalheCompraPage.confirmarDetalhesDaCompra()
    }
}

module.exports = new comprasPage()