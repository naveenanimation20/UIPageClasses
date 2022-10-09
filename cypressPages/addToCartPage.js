
const data = require('../fixtures/testData.json')

class addToCartPage {

   
    webLocators = {
        search: () => cy.get('input[name="search"]'),
        addToCartButton: () => cy.get('div.button-group>button').first(),
        successMessage: () => cy.get('div.alert.alert-success.alert-dismissible'),
        searchProduct: () => cy.get('button.btn.btn-default.btn-lg')
        


       
    }


    clearSearch()
    {
        this.webLocators.search().first().clear();
    }
    searchText(product) {

        this.webLocators.search().first().type(product);
    }

    clickOnSearch() {
        this.webLocators.searchProduct().click();
    }

    addToCart() {
        this.webLocators.addToCartButton().click();
    }

    verifySucessMessage(product) {
        this.webLocators.successMessage().should('contain',data.successProductMessage).and('contain',product);
    }
}

module.exports = new addToCartPage();