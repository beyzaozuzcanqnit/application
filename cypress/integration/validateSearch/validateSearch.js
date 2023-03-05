/// <reference types="Cypress" />
import {
    Then,
    And,
    When,
    Given,
    But,
  } from "cypress-cucumber-preprocessor/steps";

  Then(/^I enter \"([^\"]*)\" in the seach box at element \"([^\"]*)\" and press enter, I should see atleast three results.$/, function (text, element) {
    cy.get(element).type(`${text}{enter}`);
    cy.get(".list-group-item").should('have.length.at.least', 3);
  });

  Then(/^I click on the first seach result page and validate user landing webpage$/, function () {
    cy.get('.list-group-item').eq(1).click({force: true});
    cy.url().should('include.text', 'careers');
  });
