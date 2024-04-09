// Função para obter a data e hora atual formatada
function getDataAtualFormatada() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Mês começa de zero, então adicionamos 1
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    // Formato: DD.MM.AAAA HH:MM:SS
    var dataFormatada = dia + '.' + mes + '.' + ano + ' ' + hora + ':' + minutos + ':' + segundos;
    return dataFormatada;
}

// Atualiza o texto para exibir a última vez que a página foi atualizada
function atualizarUltimaAtualizacao() {
    var ultimaAtualizacaoElemento = document.getElementById('ultima-atualizacao');
    ultimaAtualizacaoElemento.textContent = getDataAtualFormatada();
}

// Chamada inicial para atualizar a última vez que a página foi atualizada
atualizarUltimaAtualizacao();

// Atualiza a cada 1 segundo
setInterval(atualizarUltimaAtualizacao, 1000);
