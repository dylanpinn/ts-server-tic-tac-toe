describe("E2E specs", () => {
  it("SHOULD render a board game", () => {
    cy.visit("/");
    cy.findByText("Hi");
  });
});
