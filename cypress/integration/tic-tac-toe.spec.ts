describe("Tic Tac Toe", () => {
  it("SHOULD render a board game", () => {
    cy.visit("/");
    cy.contains("Tic Tac Toe");
    cy.contains(".board-game");
  });
});
