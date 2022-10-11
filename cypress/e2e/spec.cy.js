describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('MARVEL COMICS').should('to.have.length', 1);
    cy.get(
      ':nth-child(4) > .sc-bjfHbI > :nth-child(2) > a > .sc-dIfARi'
    ).click();
    cy.get('.sc-bYMpWt').click();
    cy.get('.sc-jSUZER > .sc-gKPRtg > a > .sc-iBYQkv > path').click();
    cy.get(':nth-child(4) > .sc-cabOPr').contains('$ 17.99');
    cy.get('.sc-cabOPr > :nth-child(1)').click();
    cy.get(':nth-child(3) > .sc-cabOPr').contains(2);
  });
});
