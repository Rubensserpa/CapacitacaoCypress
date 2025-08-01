const el = require ('./elements').ELEMENTS
class Login {

    acessarURL(){
        cy.visit(el.url)
        cy.get(el.imgSwagLabs).should('be.visible')

    }
    preencherUsername(username){
        cy.get(el.campoUsername).type(username)
    }
       
    preencherPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarEmLogin(){
        cy.get(el.botaoLogin).click()
    }

    validarMensagemDeErro(){
        cy.get(el.msgErro).should('have.text',erro)
    }

    validarComContains(){
        cy.contains(erro).should('be.visible')
    }

  }
    
export default new Login()