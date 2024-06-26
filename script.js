document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    // Realiza a validação
    if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
    } else {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('cadastroForm').reset(); // Limpa o formulário
    }
});

