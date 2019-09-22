describe("then", () => {
  it("just a little then", () => {
    cy.visit("localhost/timed-content.html").then(() => {
      expect(true).to.equal(true);
    });
  });
});
