document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value;

    // Envie o e-mail usando o EmailJS
    emailjs.send('service_yug0ojo', 'template_ss6bfyq', {
        nome: nome,
        email: email,
        telefone: telefone,
        servico: servico,
        mensagem: mensagem
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Email enviado com sucesso!');
    }, function(error) {
       console.log('FAILED...', error);
       alert('Falha ao enviar o email. Por favor, tente novamente.');
    });
});