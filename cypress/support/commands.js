// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginUser',() => {
    cy.visit('https://admin.pkh.dojobox.id/')
    cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value','e@dojobox.id')
    cy.get('#input-password').type('admin',{force:true}).should('have.value','admin')
    cy.get('#btn-login').click()
})

import 'cypress-file-upload'