import productsPage from "./ProductsPage";

class itemPage {
    
    adicionarItemEAvancarParaOCarrinho() {
        productsPage.adicionarItemNoCarrinho()
        productsPage.clicarItemCarrinhoLabel()        
    }
}

module.exports = new itemPage()