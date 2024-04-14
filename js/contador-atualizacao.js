// Importa o módulo express, que é um framework web para Node.js
const express = require('express');
// Inicializa o aplicativo Express
const app = express();

// Rota para lidar com as solicitações do Webhook
app.post('/webhook', (req, res) => {
    // Atualiza a última vez que a página foi atualizada chamando a função definida mais tarde
    atualizarUltimaAtualizacao();
    // Envia uma resposta HTTP com o código de status 200 (OK)
    res.sendStatus(200);
});

// Inicia o servidor na porta 3000 e imprime uma mensagem no console quando estiver pronto
app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000');
});

// Função para obter a data e hora atual formatada
function getDataAtualFormatada() {
    // Obtém a data e hora atuais
    var dataAtual = new Date();
    // Extrai o dia, mês, ano, hora e minutos da data atual
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Mês começa de zero, então adicionamos 1
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    
    // Formata a data e hora no formato: DD/MM/AAAA HH:MM
    var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos;
    // Retorna a data formatada
    return dataFormatada;
}

// Função para atualizar o texto que exibe a última vez que a página foi atualizada
function atualizarUltimaAtualizacao() {
    // Obtém uma referência ao elemento HTML com o ID 'ultima-atualizacao'
    var ultimaAtualizacaoElemento = document.getElementById('ultima-atualizacao');
    // Define o texto do elemento para a data e hora atuais formatadas, chamando a função anterior
    ultimaAtualizacaoElemento.textContent = getDataAtualFormatada();
}
