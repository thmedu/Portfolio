document.addEventListener('DOMContentLoaded', function() {
    var formContato = document.getElementById('contact_form');
    
    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão
        
        // Coleta dos dados do formulário
        var nome = document.getElementById('form_name').value;
        var email = document.getElementById('form_email').value;
        var assunto = document.getElementById('form_subject').value;
        var mensagem = document.getElementById('form_message').value;
        
        // Validação dos campos
        if (nome.trim() === '' || email.trim() === '' || assunto.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }
        
        // Envio dos dados para o EmailJS
        enviarEmail(nome, email, assunto, mensagem);
        
        // Redirecionamento para o WhatsApp
        redirecionarWhatsApp(nome, mensagem);
    });
    
    // Função para enviar e-mail usando o EmailJS
    function enviarEmail(nome, email, assunto, mensagem) {
        // IDs do serviço, modelo e usuário do EmailJS
        var serviceID = 'service_qubtty5';
        var templateID = 'template_basic'; // Substitua pelo ID do seu template no EmailJS
        var userID = 'MYmhLSF9ZZWWt1foe'; // Substitua pelo seu User ID no EmailJS
        
        // Configuração do e-mail a ser enviado
        var templateParams = {
            from_name: nome,
            from_email: email,
            to_email: 'thmedu@outlook.com', 'thmeduardo@gmail.com' // Seu endereço de e-mail do Hotmail
            subject: assunto,
            message_html: mensagem
        };
        
        // Chamada para enviar e-mail usando o EmailJS
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(function(response) {
                console.log('E-mail enviado com sucesso!', response);
                alert('Sua mensagem foi enviada com sucesso!');
            }, function(error) {
                console.error('Erro ao enviar e-mail:', error);
                alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
            });
    }
    
    // Função para redirecionar para o WhatsApp
    function redirecionarWhatsApp(nome, mensagem) {
        var whatsappURL = 'https://api.whatsapp.com/send?phone=19999042072&text=Ol%C3%A1,%20' + nome + '!%20' + mensagem;
        window.location.href = whatsappURL;
    }
});
