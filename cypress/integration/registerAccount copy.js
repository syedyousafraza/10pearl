/// <reference types="cypress" />
import IndexPage from "../support/pages/actions/indexPageObj.po";

let randomNum = Math.floor(Math.random() * 10 + 1);
describe("Account Registration", function () {
    beforeEach(function () {
        cy.fixture('registryData').then(function (testdata) {
            this.testdata = testdata
        })
    })
    it("Verify user register successfully", function () {
        const indexpage = new IndexPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.enterEmailRegisteration(randomNum + "test10pearls" + randomNum + "@test.com");
        indexpage.submitCreate();
        indexpage.selectGender();
        indexpage.firstName(this.testdata.firstname);
        indexpage.lastname(this.testdata.lastname);
        indexpage.enterPassword(this.testdata.password);
        indexpage.selectDOB();
        indexpage.enterAddress1(this.testdata.address)
        indexpage.enterCity(this.testdata.city)
        indexpage.selectState();
        indexpage.enterPostcode(this.testdata.postalCode)
        indexpage.enterMobileNumber(this.testdata.mobilenumber)
        indexpage.submitRegistrationForm();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php');


    });
});