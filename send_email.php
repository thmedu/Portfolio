<?php

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Captura os dados do formulário
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Destinatário do email
    $to = "seu_email@example.com";
    
    // Cabeçalhos do email
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    
    // Corpo do email
    $email_body = "<h3>Novo Email de Contato</h3>";
    $email_body .= "<p><strong>Nome:</strong> $name</p>";
    $email_body .= "<p><strong>Email:</strong> $email</p>";
    $email_body .= "<p><strong>Assunto:</strong> $subject</p>";
    $email_body .= "<p><strong>Mensagem:</strong> $message</p>";
    
    // Envia o email
    if (mail($to, $subject, $email_body, $headers)) {
        // Se o email for enviado com sucesso
        echo json_encode(array("success" => true));
    } else {
        // Se houver algum erro ao enviar o email
        echo json_encode(array("success" => false, "message" => "Erro ao enviar o email. Por favor, tente novamente mais tarde."));
    }

} else {
    // Se o método de requisição não for POST
    echo json_encode(array("success" => false, "message" => "Método não permitido."));
}

?>
