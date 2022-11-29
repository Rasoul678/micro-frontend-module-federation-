describe("empty spec", () => {
  it("should add an item to the cart", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#showlogin").click();
    cy.get("#loginbtn").click();
    cy.get("#showcart").click();
    cy.get("#clearcart").click();
    cy.get("#addtocart_3").click();
    cy.get("#addtocart_2").click();
    cy.get("#addtocart_1").click();
    cy.get("#addtocart_1").dblclick();
    cy.get("#showcart-span").click();
    cy.get("#cart").click();
    cy.get("#grand_total").should("contain", "$180.54");
  });
});
