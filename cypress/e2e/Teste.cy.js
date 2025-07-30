/// <reference types='cypress'/>

describe('Teste - Formulário', () => {
  it('Preencher campos com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('Teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com')
    cy.get('#phone').type('9865684235')
    cy.get('input[value="male"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select('red')
    cy.get('#animals').select ('dog')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"').click()
    cy.get('#datepicker').should('have.value' ,'07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imgTeste.png')
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imgTeste.png')

  })
  it.only('Validar botão Enter', () =>{
  cy.visit('https://testautomationpractice.blogspot.com/')
  cy.get('button[name="start"]').click()
  cy.get('button[name="stop"]').should('be.visible')
  
  })

  })
