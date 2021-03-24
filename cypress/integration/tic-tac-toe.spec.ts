describe("Tic Tac Toe", () => {
  it("SHOULD render a board game", () => {
    cy.visit("/");
    cy.findByText("Tic Tac Toe");
    cy.findByTestId("game-board");
  });
});
