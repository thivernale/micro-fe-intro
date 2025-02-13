describe('E2E Test', () => {
  it('should add an item to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('#showcart').click();
    cy.get('#clearcart').click();
    cy.get('#addtocart_1').click();
    cy.get('#cart').click();
    cy.get('#grand_total').should('contain', '$197,907.00');
  });
});
