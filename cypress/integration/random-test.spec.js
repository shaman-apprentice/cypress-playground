describe("My First Test", () => {
  it("dig into requests", () => {
    cy.server();
    cy.route("localhost:8080").as("myXHttpRequest");

    cy.visit("localhost:80");

    cy.wait("@myXHttpRequest").then(myXHttpRequest => {
      debugger;
    });
  });
});
