describe('Testes de validação de campos', () => {
    beforeEach(() => {
      cy.visit('/'); // Ajuste o caminho conforme necessário
    });
  
    it('Deverá exibir mensagem de erro ao submeter com campo "Nome" vazio', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error-nome').should('exist');
    });
  
    it('Deverá exibir mensagem de erro ao submeter com campo "E-mail" vazio', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error-email').should('exist');
    });
  
    it('Deverá exibir mensagem de erro ao inserir e-mail inválido', () => {
      cy.get('input[name="email"]').type('email-invalido');
      cy.get('button[type="submit"]').click();
      cy.get('.error-email').should('exist');
    });
  
    it('Deverá exibir mensagem de erro ao submeter com campo "Senha" vazio', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error-senha').should('exist');
    });
  
    it('Deverá exibir mensagem de erro ao submeter com campo "Confirmação de Senha" vazio', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error-confirmarSenha').should('exist');
    });
  
    it('Deverá exibir mensagem de erro ao submeter com senhas que não coincidem', () => {
      cy.get('input[name="senha"]').type('senha123');
      cy.get('input[name="confirmarSenha"]').type('outraSenha');
      cy.get('button[type="submit"]').click();
      cy.get('.error-confirmarSenha').should('exist');
    });
  });
  