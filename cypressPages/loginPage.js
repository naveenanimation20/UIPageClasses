const data = require('../fixtures/testData.json')
import RegisterPage from '../pages/registerPage';

class loginPage {


    webLocators = {
        myAccount: () => cy.get('a[title="My Account"]'),
        login: () => cy.get('a:contains("Login")'),
        email: () => cy.get('input[name="email"]'),
        password: () => cy.get('input[name="password"]'),
        loginSubmit: () => cy.get('input[value="Login"]'),
        lastName: () => cy.get('input#input-lastname'),
        email: () => cy.get('input#input-email'),
        telephone: () => cy.get('input#input-telephone'),
        password: () => cy.get('input#input-password'),
        confirmPassword: () => cy.get('input#input-confirm'),
        agreePolicy: () => cy.get('input[name="agree"]'),
        continue: () => cy.get('a:contains("Continue")'),
        successMessage: () => cy.get('h1:contains("Your Account Has Been Created!")'),
        userAccount:()=> cy.get('h2:contains("My Account")')


    }



    selectLogin() {
        
        this.webLocators.myAccount().click();
        this.webLocators.login().click();

    }

    clickLogin() {
        this.webLocators.loginSubmit().click();
    }
    verifyLogin()
    {
        this.webLocators.userAccount().should('exist');
    }
   

}
module.exports = new loginPage();