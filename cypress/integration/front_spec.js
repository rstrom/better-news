describe("Front Page", () => {
  it("successfully load front page", () => {
    cy.visit("/");
    cy.title().should("includes", "HN");
    // page should have top ten stories
    cy.get(".item").should("have.length", 10);
  });
});
