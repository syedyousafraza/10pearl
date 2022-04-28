/// <reference types="cypress" />
import IndexPage from "../support/pages/actions/indexPageObj.po";

describe("Login Feature", function () {
    beforeEach(function () {
        cy.fixture('logindata').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it("Verify user login successfully", function () {
        const indexpage = new IndexPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(this.testdata.username)
        indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');

    });

    it("Verify invalid login when email is empty", function () {
        const indexpage = new IndexPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        //    indexpage.loginEmailAddress(this.testdata.username)
        indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.requiredFieldsAlert("An email address required.");

    });

    it("Verify invalid login when password is empty", function () {
        const indexpage = new IndexPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(this.testdata.username)
        //   indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.requiredFieldsAlert("Password is required.");

    });


    it("Verify with invalid user name and invalid password", function () {
        const indexpage = new IndexPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress("invalid@test.com")
        indexpage.loginPassword("invalid")
        indexpage.submitLogin();
        indexpage.requiredFieldsAlert("Authentication failed.");

    });


});






