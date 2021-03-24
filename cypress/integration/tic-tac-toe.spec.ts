describe("Tic Tac Toe", () => {
  it("SHOULD render a board game", () => {
    cy.visit("/");
    cy.findByText("Hi");
  });
});
