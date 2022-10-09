const data = require('../fixtures/testData.json')
const email = (data.email+
    Date.now()+"@dispostable.com");

class registerPage {


    webLocators = {
        myAccount: () => cy.get('a[title="My Account"]'),
        register: () => cy.get('a:contains("Register")'),
        logout:()=>cy.get('a:contains("Logout")'),
        firstName: () => cy.get('input[name="firstname"]'),
        lastName: () => cy.get('input[name="lastname"]'),
        email: () => cy.get('input#input-email'),
        telephone: () => cy.get('input#input-telephone'),
        password: () => cy.get('input#input-password'),
        confirmPassword: () => cy.get('input#input-confirm'),
        agreePolicy: () => cy.get('input[name="agree"]'),
        continue: () => cy.get('input.btn.btn-primary'),
        successMessage:()=>cy.get('h1:contains("Your Account Has Been Created!")')


    }


    openUrl() {
        cy.visit('/');
    }

    clickOnRegisterButton() {


        this.webLocators.myAccount().click();
        this.webLocators.register().click();
    }

    enterFirstName() {
        this.webLocators.firstName().type(data.firstName);
    }

    enterLastName() {
        this.webLocators.lastName().type(data.lastName);

    }

     
     enterEmailId() {
        this.webLocators.email().type(email);
 
     }
  

    enterPhoneNumber() {
        this.webLocators.telephone().type(data.telephone);
    }


    enterPassword() {
        this.webLocators.password().type(data.password);
        

    }
    enterConfirmPassword(){
        this.webLocators.confirmPassword().type(data.password);
    }


    selectPrivacyPolicy() {
        this.webLocators.agreePolicy().check();

    }
    clickContinue() {
        this.webLocators.continue().click();

    }
    verifySuccessMessage()
    {
        this.webLocators.successMessage().should('exist');
        
    }
    LogOut(){
        this.webLocators.myAccount().click();
        this.webLocators.logout().first().click();
       

    }

    enterLogin(){
        this.webLocators.email().type(data.loginEmail);
        
    }


}
module.exports = new registerPage();