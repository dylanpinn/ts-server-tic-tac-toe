type Url = string;

describe("Example spec", () => {
  it("works", () => {
    const url: Url = "https://example.cypress.io";
    cy.visit(url);
    cy.contains("Kitchen Sink");
  });
});
