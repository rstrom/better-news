describe("Specific items", () => {
  it("view first submission", () => {
    cy.visit("/#/1");
    cy.title().should("include", "Y Combinator");
    cy
      .get(".loading", { timeout: 30000 })
      .should("not.exist")
      .then(cy.screenshot);
  });

  it("view pg's comment", () => {
    cy.visit("/#/17");
    cy.get(".comment:first .by").should("contain", "pg");
    cy.get(".comment:first .text").should("contain", "eat");
    cy
      .get(".loading", { timeout: 30000 })
      .should("not.exist")
      .then(cy.screenshot);
  });
});
