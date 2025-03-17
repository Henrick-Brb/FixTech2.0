function cadastrar() {
    const email = document.querySelector('input[type="email"]').value;

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return; // Impede a execução do restante da função
    } else {
        alert('Cadastro realizado com sucesso!');
    }

    document.querySelector('input[type="email"]').value = '';
}
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}