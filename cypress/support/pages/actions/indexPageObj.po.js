
class IndexPage {

    openWeb(weburl) {
        cy.visit(weburl)
    };

    signinBtn() {
        cy.get('.login').click();
    }


    submitCreate() {
        cy.get("#SubmitCreate > span").click();
    }

    registerBtn() {
        cy.get('.register-header-action').click();
        cy.get('#join-neu-form > .wt-grid > .wt-grid__item-xs-12')
    }


    enterEmailRegisteration(email) {
        cy.get('#email_create')
            .click()
            .clear()
            .type(email)
        return this;
    }

    errorForPassword(passwordalrt) {
        cy.get('#aria-join_neu_password_field-error').should(($div) => {
            expect($div.text().trim()).equal(passwordalrt);
        })
    }




    validationMessage(alert) {
        cy.get("#aria-join_neu_email_field-error").should(($div) => {
            expect($div.text().trim()).equal(alert);
        });

    }


    requiredFieldsAlert(alert) {
        cy.get("div[class='alert alert-danger'] ol li").should(($div) => {
            expect($div.text().trim()).equal(alert);
        });


    }


    verifyTitle(headertext) {
        cy.get('.account_creation:nth-child(1) > .page-subheading').should(($div) => {
            expect($div.text().trim()).equal(headertext);
        });

    }





    enterFirstName(fname) {
        cy.get('#join_neu_first_name_field')
            .click()
            .clear()
            .type(fname)
        return this;

    }

    enterPassword(pwd) {
        cy.get('#passwd')
            .click()
            .clear()
            .type(pwd)
        return this;
    }


    browserURL(url) {
        cy.visit(url)
    };

    enterUsername(username) {
        cy.get('[id=Email]')
            .clear()
            .type(username);
        return this;
    };


    enter_Password(pass) {
        cy.get('[id=Password]')
            .clear()
            .type(pwd);
        return this;
    }

    submit() {
        cy.get('[type=submit]').click()

    }


    agentlogin(username) {
        cy.get("#username")
            .clear()
            .type(username);
        return this;
    };

    agentpassword(password) {
        cy.get("#password")
            .clear()
            .type(password);
        return this;
    };


    registerAccount() {
        cy.get(".wt-validation > .wt-btn").click();
    }

    loginwithGoogle() {
        return cy.get('#join-neu-form > div.wt-display-flex-xs.wt-flex-direction-column-xs > div.wt-mb-xs-2 > div');
    }

    checkBtnEnable() {
        cy.get('#join-neu-form > div.wt-display-flex-xs.wt-flex-direction-column-xs > div.wt-mb-xs-2 > div').should('not.be.disabled')

    }

    selectGender() {
        cy.get('#id_gender1').click();
    }

    firstName(fname) {
        cy.get('#customer_firstname')
            .type(fname);
        return this
    }


    lastname(lname) {
        cy.get('#customer_lastname')
            .type(lname);
        return this
    }

    selectDOB() {
        cy.get('#days').select('1');
        cy.get('#months').select('1');
        cy.get('#years').select('1988');
    }

    enterAddress1(address) {
        cy.get('#address1')
            .type(address);
        return this
    }


    enterCity(city) {
        cy.get('#city').click();
        cy.get('#city').type(city);
        return this
    }

    selectState() {
        cy.get('#id_state').select('21');
    }

    enterPostcode(postcode) {
        cy.get('#postcode').click();
        cy.get('#postcode').type(postcode);
        return this
    }

    enterMobileNumber(numb) {
        cy.get('#phone_mobile').click();
        cy.get('#phone_mobile').type(numb);
        return this
    }

    submitRegistrationForm() {

        //   cy.get('#submitAccount > span').click();
        cy.get('#submitAccount > span').click();
        //        cy.url().should('contains', 'http://automationpractice.com/index.php');
    }

    verifyAccountCreated(txt) {
        cy.get('.info-account').should(($div) => {
            expect($div.text().trim()).equal(txt);
        })
    }

    loginEmailAddress(email) {
        return cy.get("#email").type(email);
    }

    loginPassword(pass) {
        return cy.get("#passwd").type(pass);
    }



    submitLogin() {
        cy.get("button[id='SubmitLogin'] span").click();
    }



};

export default IndexPage;