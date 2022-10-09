const data = require('../fixtures/testData.json')

class shoppingCartPage {


    webLocators = {
        cart: () => cy.get('span#cart-total'),
        viewCart: () => cy.get('i.fa.fa-shopping-cart'),
        productName: () =>  cy.get('a:contains(' + product + ')'),
        lastName: () => cy.get('input#input-lastname'),
        email: () => cy.get('input#input-email'),
        telephone: () => cy.get('input#input-telephone'),
        password: () => cy.get('input#input-password'),
        confirmPassword: () => cy.get('input#input-confirm'),
        agreePolicy: () => cy.get('input[name="agree"]'),
        continue: () => cy.get('input.btn.btn-primary'),
        successMessage:()=>cy.get('h1:contains("Your Account Has Been Created!")'),
        clearCart:()=>cy.get('button[title="Remove"]'),
        

        
    }



    clickOnCart() {


       
        this.webLocators.viewCart().first().click({force:true});
        cy.wait(1000);
    }

    verifyProductsInCart(product){
        cy.get('a:contains(' + product + ')').contains(product);

    }
    clearcart(){





        this.webLocators.cart().then((value)=>{

            const cartValue=value.text();

            if(cartValue==="0 item(s) - $0.00")

            {
                console.log("Fesh Cart");

            

        }
        else{
            this.webLocators.cart().click();
            this.webLocators.clearCart().first().click({force:true});
        }
            

    });}


}
module.exports = new shoppingCartPage();