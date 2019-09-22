describe("Cypress route playground", () => {
  it("dig into requests", () => {
    cy.server();
    cy.route("localhost:8080").as("myXHttpRequest");

    cy.visit("localhost:80/dynamic-content.html");

    cy.wait("@myXHttpRequest").then(myXHttpRequest => {
      expect(myXHttpRequest.status).to.equal(200);
    });
  });
});
