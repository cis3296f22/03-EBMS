// <referece types="cypress">

context("Home page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it("Should load our homepage and billboards", () => {
    cy.get("h1").contains("Welcome")
  })
})