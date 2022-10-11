describe('Navigation UI', () => {
  it('Should return true when have title', () => {
    cy.visit('/');
    cy.contains('MARVEL COMICS').should('to.have.length', 1);
  });
  it('Should return true when have all cards', () => {
    cy.get('.sc-idXgbr ').should('to.have.length', 20);
  });
  it('Should return true if navigation is correct ', () => {
    cy.get('.sc-dmctIk').click();
    cy.url().should('be.equal', 'http://127.0.0.1:5173/comics');
    cy.visit('/');
    cy.get('.sc-jSUZER ').click();
    cy.url().should('be.equal', 'http://127.0.0.1:5173/comics');
  });
  it('Should return true if it contains the components', () => {
    cy.visit('/');
    cy.get(
      ':nth-child(4) > .sc-bjfHbI > :nth-child(1) > a > .sc-dIfARi'
    ).click();
    cy.get('.sc-dIfARi').should('to.have.length', 1);
    cy.get('.sc-bcXHqe').should('to.have.length', 1);
    cy.get('.sc-ezOQGI').should('to.have.length', 1);
    cy.get('.sc-bYMpWt').should('to.have.length', 1).click();
  });
  it('Should return true if it contains components and is correctly calculating the price', () => {
    cy.get('.sc-jSUZER > .sc-gKPRtg > a > strong').should('to.have.text', 1);
    cy.get('.sc-jSUZER > .sc-gKPRtg > a > .sc-iBYQkv').click();
    cy.get('.sc-jIRcFI').should('to.have.length', 1);
    cy.get('.sc-AHaJN')
      .should('to.have.length', 1)
      .should('to.have.text', 'SUBTOTAL: $ 3.99');
    cy.get('.sc-iTFTee').click();
    cy.get(':nth-child(3) > .sc-cabOPr').should('to.have.text', 2);
    cy.get('.sc-AHaJN').should('to.have.text', 'SUBTOTAL: $ 7.98');
  });
});
