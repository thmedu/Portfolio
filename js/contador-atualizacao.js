function getDataAtualFormatada() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.toLocaleString('pt-BR', { month: 'long' }); // Obtém o nome do mês
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();

    // Formato: DD de MMMM de AAAA 'às' HH:MM
    var dataFormatada = dia + ' de ' + mes + ' de ' + ano + ' às ' + hora + ':' + (minutos < 10 ? '0' : '') + minutos;
    return dataFormatada;
}
