/// <reference types="cypress" />

describe("Comparisons", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should change the text of button when clicked if the number of comparisons (3) is not exceeded", () => {
    const ADD_TO_COMPARE = "Add to Compare";
    const REMOVE = "Remove";
    cy.contains(ADD_TO_COMPARE).then(($button) => {
      // the content is a string, thus we need to quote it
      $button.click();
      expect($button).to.contain(REMOVE);
    });
    cy.contains(ADD_TO_COMPARE).click();
    cy.contains(ADD_TO_COMPARE).click();
    cy.contains(ADD_TO_COMPARE).then(($button) => {
      // the content is a string, thus we need to quote it
      $button.click();
      expect($button).to.contain(ADD_TO_COMPARE);
    });
    cy.contains(REMOVE).then(($button) => {
      // the content is a string, thus we need to quote it
      $button.click();
      expect($button).to.contain(ADD_TO_COMPARE);
    });
  });
});
