describe("Aliasing", () => {
  it("checks if aliasing dom elements provide a living element", () => {
    cy.visit("localhost/some-changing-content.html");
    cy.get("#content").as("contentSelector");

    cy.get("@contentSelector").then(elems => {
      expect(elems[0].innerHTML).to.equal("initial");
    });

    cy.wait(1000);
    cy.get("@contentSelector").then(elems => {
      expect(elems[0].innerHTML).to.equal("modified");
    });
  });
});
