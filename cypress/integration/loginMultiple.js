/// <reference types="cypress" />
import IndexPage from "../support/pages/actions/indexPageObj.po";
const login_data = require('../fixtures/multiplelogin.json')


describe("Login Feature", function () {

    it("Verify user login successfully", function () {
        cy.get(login_data).each((param) => {
        const indexpage = new IndexPage();
        indexpage.openWeb(param.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(param.username)
        indexpage.loginPassword(param.password)
        indexpage.submitLogin();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');
        indexpage.signout();

    });
    });

});






