/* eslint-disable no-undef */
describe("Find repositories functionality", () => {
  it("renders the page without errors", () => {
    cy.visit("/");
    cy.get("h1").contains("The very cool github user repositories finder");
  });
  it("renders the search input with a placeholder", () => {
    cy.visit("/");
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Enter a github username"
    );
  });
  it("is able to search for the public repositories of a user", () => {
    cy.visit("/");
    cy.get("input").type("seam7");
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Enter a github username"
    );
    cy.contains("Search").click();
    cy.get("[data-testid='repository-card']");
    cy.url().should("include", "/?username=seam7");
  });

  it("shows a loader while searching for the repositories after a request is made", () => {
    cy.visit("/");
    cy.get("input").type("seam7");
    cy.contains("Search").click();
    cy.get(".loader");
  });

  it("performs a search automatically if the queryparam for a user is passed", () => {
    cy.visit("/?username=seam7");
    cy.get("[data-testid='repository-card']");
  });

  it("should clear the repository list when the Clear button is clicked", () => {
    cy.visit("/?username=seam7");
    cy.contains("Clear").click();
    cy.get("[data-testid='repository-card']").should("not.exist");
  });

  it("should have the repository links open in another tab", () => {
    cy.visit("/?username=seam7");
    cy.get("[data-testid='repository-card']").should(
      "have.attr",
      "target",
      "_blank"
    );
  });

  it("should show the name, the amount of stars and the amount of forks for each repository", () => {
    // Kind of a flaky test, as it doesn't assert the amounts (because github is public and that would make the test fragile)
    cy.visit("/?username=seam7");
    cy.get("[data-testid='repository-card']").should(
      "have.attr",
      "target",
      "_blank"
    );
    cy.get("[data-testid='repository-name']");
    cy.get("[data-testid='repository-stars']");
    cy.get("[data-testid='repository-forks']");
  });
});
