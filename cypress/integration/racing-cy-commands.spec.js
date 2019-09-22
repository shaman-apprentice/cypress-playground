describe("can Cypress commands race with each other?", () => {
  it("check content from 'timed-content route'", () => {
    const after1secStub = cy.stub();

    cy.visit("localhost/timed-content.html");
    cy.get("#after-3-sec").then(() => {
      expect(after1secStub).not.to.be.called;
    });
    cy.get("#after-1-sec").then(after1secStub);
  });
});
