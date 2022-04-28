
class CartPage {


    deleteCartItem(){
      return cy.get('.icon-trash').click();
     //   cy.get('.alert').click();
    }

    successDeletion(alertmessage){
        cy.get('.alert').should(($div) => {
            expect($div.text().trim()).equal(alertmessage);
        })
    }

    increaseCartItem(){
        return cy.get("#cart_quantity_up_1_1_0_681049").click();
    }

    verifyCartQty(qty){ 
        cy.get('#cart_summary').find('tr').should('have.length', qty)
        return this

    }

    itemCount(count){
        cy.get('.cart_quantity_input')
       .should('have.value', count);
       return this;
    }

    
    addCartItems(){
        cy.get('.sf-menu > :nth-child(3) > a').click()
                cy.get("a[title='Add to cart'] span").click();
        return this ;
    }

    continouCheckout(){
      return  cy.get('.button-container > .button-medium > span').click()
     //   cy.get("a[title='Proceed to checkout'] span").click();
    }

    successfullyAdded(txt) {
        cy.get('.layer_cart_product > h2').should(($div) => {
            expect($div.text().trim()).equal(txt);
        })
    }


    




};

export default CartPage;