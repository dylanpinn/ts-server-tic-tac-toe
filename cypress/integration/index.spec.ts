describe("E2E specs", () => {
  it("SHOULD render a greeting", () => {
    cy.visit("/");
    cy.findByText("Hi");
  });
});
