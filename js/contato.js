document.addEventListener('DOMContentLoaded', function() {
    // Suas funções JavaScript aqui
    var whatsappLink = document.querySelector('.whatsapp-link');
    whatsappLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        var numeroTelefone = '19999042072';
        var mensagem = 'Olá! Gostaria de iniciar uma conversa com você.';
        var whatsappURL = 'https://wa.me/' + numeroTelefone + '?text=' + encodeURIComponent(mensagem);
        window.open(whatsappURL, '_blank');
    });
});

// Função para enviar o email
function enviarEmail(nome, email, assunto, mensagem) {
    var serviceID = 'service_t30zaof'; // ID do serviço do Outlook
    var templateID = 'template_9xc3u5b'; // ID do modelo de email específico para o Outlook
    var userID = '1POVRbl6qwiFnseZc'; // Chave pública do Outlook

    var templateParams = {
        from_name: nome,
        from_email: email,
        to_email: ['thmedu@outlook.com', 'thmeduardo@gmail.com', 'thomas_webdev@outlook.com'],
        subject: assunto,
        message_html: mensagem
    };

    // Envia o email usando o EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            // Limpa os campos do formulário após o envio
            limparCamposFormulario();
            // Exibe uma mensagem de sucesso para o usuário
            exibirMensagemEnviada(email);
        }, function(error) {
            console.error('Erro ao enviar e-mail:', error);
            // Exibe uma mensagem de erro para o usuário
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
        });
}

// Função para limpar os campos do formulário após o envio
function limparCamposFormulario() {
    document.getElementById('form_name').value = '';
    document.getElementById('form_email').value = '';
    document.getElementById('form_subject').value = '';
    document.getElementById('form_message').value = '';
}

// Função para exibir uma mensagem de sucesso após o envio do email
function exibirMensagemEnviada(email) {
    var mensagem = 'Obrigado por entrar em contato! Sua mensagem foi enviada para ' + email + '.';
    alert(mensagem);
}

// Adiciona um ouvinte de evento para o envio do formulário
var form = document.getElementById('contact_form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('form_name').value;
    var email = document.getElementById('form_email').value;
    var assunto = document.getElementById('form_subject').value;
    var mensagem = document.getElementById('form_message').value;

    // Envia o email
    enviarEmail(nome, email, assunto, mensagem);
});

