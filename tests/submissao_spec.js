describe('Testes de submissão de formulário', () => {
    beforeEach(() => {
      cy.visit('/'); // Ajuste o caminho conforme necessário
    });
  
    it('Submissão bem-sucedida', () => {
      cy.get('input[name="nome"]').type('Usuário Teste');
      cy.get('input[name="email"]').type('usuario@teste.com');
      cy.get('input[name="senha"]').type('senha123');
      cy.get('input[name="confirmarSenha"]').type('senha123');
      cy.get('button[type="submit"]').click();
      cy.get('.success-message').should('exist');
    });
  
    it('Submissão com campos vazios', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.error-nome').should('exist');
      cy.get('.error-email').should('exist');
      cy.get('.error-senha').should('exist');
      cy.get('.error-confirmarSenha').should('exist');
    });
  
    it('Submissão com e-mail inválido', () => {
      cy.get('input[name="email"]').type('email-invalido');
      cy.get('button[type="submit"]').click();
      cy.get('.error-email').should('exist');
    });
  
    it('Submissão com senhas que não coincidem', () => {
      cy.get('input[name="senha"]').type('senha123');
      cy.get('input[name="confirmarSenha"]').type('outraSenha');
      cy.get('button[type="submit"]').click();
      cy.get('.error-confirmarSenha').should('exist');
    });
  });
  