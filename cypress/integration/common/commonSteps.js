/// <reference types="Cypress" />
import {
  Then,
  And,
  When,
  Given,
  But,
} from "cypress-cucumber-preprocessor/steps";

Given(/^I should be in the magnolia loginpage$/, function (loginpageurl) {
  cy.visit(Cypress.config("baseUrl"), {failOnStatusCode: false});
});
