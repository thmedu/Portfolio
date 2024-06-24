document.addEventListener('DOMContentLoaded', function() {
    var formContato = document.getElementById('contact_form');
    var formName = document.getElementById('form_name');
    var formEmail = document.getElementById('form_email');
    var formSubject = document.getElementById('form_subject');
    var formMessage = document.getElementById('form_message');

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        enviarFormulario();
    });

    // Adiciona eventos de validação de campo em tempo real
    formName.addEventListener('input', validarCampo);
    formEmail.addEventListener('input', validarCampo);
    formSubject.addEventListener('input', validarCampo);
    formMessage.addEventListener('input', validarCampo);

    // Função para enviar o formulário com animação
    function enviarFormulario() {
        var nome = formName.value.trim();
        var email = formEmail.value.trim();
        var assunto = formSubject.value.trim();
        var mensagem = formMessage.value.trim();

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

    // Função para validar o campo em tempo real
    function validarCampo(event) {
        var campo = event.target;
        var valor = campo.value.trim();

        if (valor === '') {
            campo.classList.add('campo-invalido');
        } else {
            campo.classList.remove('campo-invalido');
        }
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
                exibirMensagemEnviada();
                limparCamposFormulario();
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
        }, 1000);
    }

    // Função para exibir mensagem de envio bem-sucedido
    function exibirMensagemEnviada() {
        var messagesDiv = document.querySelector('.messages');
        messagesDiv.innerHTML = '<div class="alert alert-success alert-dismissable" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            '<strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso.' +
            '</div>';
    }

    // Função para limpar campos do formulário após envio
    function limparCamposFormulario() {
        formName.value = '';
        formEmail.value = '';
        formSubject.value = '';
        formMessage.value = '';
    }
});
