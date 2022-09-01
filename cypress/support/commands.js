Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Lay')
  cy.get('#lastName').type('Lauren')
  cy.get('#email').type('lay@exemplo.com')
  cy.get('#open-text-area').type('Teste')
  //cy.get('button[type="submit"]').click()
  cy.contains('button', 'Enviar').click()
})
