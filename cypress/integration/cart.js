/// <reference types="cypress" />
import IndexPage from "../support/pages/actions/indexPageObj.po";
import CartPage from "../support/pages/actions/cartPageObj.po";


describe("Login Feature", function () {
    beforeEach(function () {
        cy.fixture('logindata').then(function (testdata) {
            this.testdata = testdata
        }) 
    })
    it("Verify item added to cart successfully", function () {
        const indexpage =new IndexPage();
        const cartitem = new CartPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(this.testdata.username)
        indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');
        cartitem.addCartItems();
        cartitem.successfullyAdded("Product successfully added to your shopping cart");
        cartitem.continouCheckout();
        cartitem.itemCount(1);        

    });


    it("Verify Edit Cart Items", function () {
        const indexpage = new IndexPage();
        const cartitem = new CartPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(this.testdata.username)
        indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');
        cartitem.addCartItems();
        cartitem.successfullyAdded("Product successfully added to your shopping cart");
        cartitem.continouCheckout();
        cartitem.itemCount(1);
        cartitem.increaseCartItem();
        cartitem.itemCount(2);
    });

    it("Verify delete Cart Items", function () {
        const indexpage = new IndexPage();
        const cartitem = new CartPage();
        indexpage.openWeb(this.testdata.baseUrl);
        indexpage.signinBtn();
        indexpage.loginEmailAddress(this.testdata.username)
        indexpage.loginPassword(this.testdata.password)
        indexpage.submitLogin();
        indexpage.verifyAccountCreated("Welcome to your account. Here you can manage all of your personal information and orders.")
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');
        cartitem.addCartItems();
        cartitem.successfullyAdded("Product successfully added to your shopping cart");
        cartitem.continouCheckout();
        cartitem.itemCount(1);
        cartitem.deleteCartItem();
        cartitem.successDeletion("Your shopping cart is empty.");
        
    
    });





    
});






