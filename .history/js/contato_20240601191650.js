document.addEventListener('DOMContentLoaded', function() {
    var formContato = document.getElementById('contact_form');

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        enviarFormulario();
    });

    // Função para enviar o formulário com animação
    function enviarFormulario() {
        var nome = document.getElementById('form_name').value.trim();
        var email = document.getElementById('form_email').value.trim();
        var assunto = document.getElementById('form_subject').value.trim();
        var mensagem = document.getElementById('form_message').value.trim();

        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        enviarEmail(nome, email, assunto, mensagem);
        redirecionarWhatsAppWeb(nome, mensagem);
        animarEnvioFormulario();
    }

    // Função para enviar e-mail usando o EmailJS com animação
    function enviarEmail(nome, email, assunto, mensagem) {
        var serviceID = 'service_qubtty5';
        var templateID = 'template_basic';
        var userID = 'MYmhLSF9ZZWWt1foe';

        var templateParams = {
            from_name: nome,
            from_email: email,
            to_email: ['thmedu@outlook.com', 'thmeduardo@gmail.com'],
            subject: assunto,
            message_html: mensagem
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response);
                alert('Sua mensagem foi enviada com sucesso!');
            })
            .catch(function(error) {
                console.error('Erro ao enviar e-mail:', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
            });
    }

    // Função para validar o formato do e-mail
    function validarEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Função para redirecionar para o WhatsApp Web com animação
    function redirecionarWhatsAppWeb(nome, mensagem) {
        var whatsappURL = 'https://web.whatsapp.com/send?phone=19999042072&text=Ol%C3%A1,%20' + nome + '!%20' + mensagem;
        window.open(whatsappURL, '_blank');
    }

    // Função para animar o envio do formulário
    function animarEnvioFormulario() {
        var formSection = document.getElementById('form_section');
        formSection.classList.add('animated', 'fadeOutUp');

        setTimeout(function() {
            formSection.style.display = 'none';
            alert('Obrigado por entrar em contato!');
        }, 1000);
    }
});
