
const data = require('../fixtures/testData.json');
const registerPage = require('./registerPage');

class checkOutPage {


    webLocators = {
        checkout: () => cy.get('a[title="Checkout"]'),
        address1: () => cy.get('input#input-payment-address-1'),
        city: () => cy.get('input#input-payment-city'),
        country: () => cy.get('select#input-payment-country').select('United Arab Emirates'),
        region: () => cy.get('select#input-payment-zone').select('Dubai'),
        continue: () => cy.get('input[type="button"]'),
        loggedIn: () => cy.get('input[value="existing"]'),
        deliveryDetailsContinue:()=>cy.get('input#button-shipping-address'),
        deliveryMethodContinue:()=>cy.get('input#button-shipping-method'),
        paymentMethodContinue:()=>cy.get('input#button-payment-method'),
        confirmOrder:()=>cy.get('input[value="Confirm Order"]'),
        orderPlaced:()=>cy.get('h1:contains("Your order has been placed!")')

    }


    clickOnCheckout() {
        this.webLocators.checkout().click();
    }



    enterBillingAddress()
{
    if (this.webLocators.loggedIn().should('be.checked')) {
        this.clickContinue();
        this.selectPaymentMethods();

    }
    else
    {
    registerPage.enterFirstName();
    registerPage.enterLastName();
    this.enterAddress();
    this.enterCity();
    this.enterCountry();
    this.enterRegion();
    this.clickContinue();
    this.selectPaymentMethods();

    }

}
selectPaymentMethods(){
    this.selectDeliveryDetails();
    this.selectDeliveryMethod();
    this.selectPaymentMethod();

}

    enterAddress() {
       
            this.webLocators.address1().type(data.BillingAddress.address1);
    }


    enterCity() {
        this.webLocators.city().type(data.BillingAddress.city);

    }


    enterCountry() {
        this.webLocators.country();

    }
    enterRegion() {
        this.webLocators.region();

    }
    clickContinue() {
        this.webLocators.continue().click();

    }
    selectDeliveryDetails()
    {
        this.webLocators.deliveryDetailsContinue().click();
    }
    selectDeliveryMethod()
    {

        this.webLocators.deliveryMethodContinue().click();
    }
    selectPaymentMethod()
    {
        registerPage.selectPrivacyPolicy();

        this.webLocators.paymentMethodContinue().click();
    }
    confirmOrder(){
        this.webLocators.confirmOrder().click();
    }
    verifyPlacedOrder(){
        this.webLocators.orderPlaced().should('exist');
    }


}

module.exports = new checkOutPage();