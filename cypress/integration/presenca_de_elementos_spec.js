describe('Testes de presença de elementos', () => {
    beforeEach(() => {
      cy.visit('/'); // Ajuste o caminho conforme necessário
    });
  
    it('Campo "Nome" deverá estar presente', () => {
      cy.get('input[name="nome"]').should('exist');
    });
  
    it('Campo "E-mail" deverá estar presente', () => {
      cy.get('input[name="email"]').should('exist');
    });
  
    it('Campo "Senha" deverá estar presente', () => {
      cy.get('input[name="senha"]').should('exist');
    });
  
    it('Campo "Confirmação de Senha" deverá estar presente', () => {
      cy.get('input[name="confirmarSenha"]').should('exist');
    });
  
    it('Botão de submissão do formulário deverá estar presente', () => {
      cy.get('button[type="submit"]').should('exist');
    });
  });
  