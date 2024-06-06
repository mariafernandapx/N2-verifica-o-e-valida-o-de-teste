describe('Teste de Login', () => {
    it('Deve fazer login com sucesso', () => {
      cy.visit('/login'); // Visita a página de login
  
      // Preenche os campos de login e senha
      cy.get('#username').type('meu_usuario');
      cy.get('#password').type('minha_senha');
  
      // Submete o formulário de login
      cy.get('form').submit();
  
      // Verifica se o usuário foi redirecionado para a página de perfil após o login
      cy.url().should('include', '/perfil');
  
      // Verifica se há uma mensagem de boas-vindas na página de perfil
      cy.get('.welcome-message').should('contain', 'Bem-vindo, meu_usuario!');
    });
  
    it('Deve exibir uma mensagem de erro para credenciais inválidas', () => {
      cy.visit('/login'); // Visita a página de login
  
      // Preenche os campos de login e senha com credenciais inválidas
      cy.get('#username').type('usuario_invalido');
      cy.get('#password').type('senha_invalida');
  
      // Submete o formulário de login
      cy.get('form').submit();
  
      // Verifica se uma mensagem de erro é exibida na página de login
      cy.get('.error-message').should('contain', 'Credenciais inválidas. Por favor, tente novamente.');
    });
  });
  