describe("Top stories", () => {
  it("visit front page", () => {
    cy.visit("/");
    cy.title().should("include", "HN");
    // page should have top ten stories
    cy
      .get(".item")
      .should("have.length", 10)
      .then(cy.screenshot);
  });

  it("interact with top item and load comments", () => {
    // should be labeled 1.
    const first = cy.get(".item:first .rank").should("contain", "1.");

    cy
      .get(".item:first a.info")
      // load comments / page for first item
      .click()
      .then(() => {
        // after completely loading, take a screenshot
        cy
          .get(".loading", { timeout: 30000 })
          .should("not.exist")
          .then(cy.screenshot);
      });
  });
});
