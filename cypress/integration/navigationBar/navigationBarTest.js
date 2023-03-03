/// <reference types="Cypress" />
import {
    Then,
    And,
    When,
    Given,
    But,
  } from "cypress-cucumber-preprocessor/steps";
  import * as constants from "../../support/constants";

  Then(/^I click on the tours index at element \"([^\"]*)\" and validate the dropdown elements$/, function (element) {
        cy.get(element).click();
  });

  Then(/^I click on the tours dropdown at elements and check if all the buttons are visible$/, function () {
    cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").each(($el, index, $list) => {        
            // write an assertion saying the element contains that particular text 
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").eq(index).should('contain.text', constants.navigationDropdownElements.tours[index]);
      })
  });
  Then(/^I click on the tours dropdown elements button and check if they allow user to land on correct webpage$/, function (callback) {
      cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").each(($el, index, $list) => {   
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1) li").eq(index).click();
            cy.url().should('include', constants.navigationDropdownElements.toursUrl[index]);
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(1)").click();       
      }); 
    });

   Then(/^I click on the destinations index at element \"([^\"]*)\" and validate the dropdown elements$/, function (element) {
      cy.get(element).click();
    });
  
   Then(/^I click on the destinations dropdown at elements and check if all the buttons are visible$/, function () {
      cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").each(($el, index, $list) => {        
            // write an assertion saying the element contains that particular text 
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").eq(index).should('contain.text', constants.navigationDropdownElements.destinations[index]);
      })
    });
  
   Then(/^I click on the destinations dropdown elements button and check if they allow user to land on correct webpage$/, function () {
      cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").each(($el, index, $list) => {   
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2) li").eq(index).click();
            cy.url().should('include', constants.navigationDropdownElements.destinationsUrl[index]);
            cy.get(".navbar-right .nav.navbar-nav .dropdown:nth-child(2)").click();       
      }); 
    });
