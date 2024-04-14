const contadorElemento = document.getElementById('contador');
let contador = 0;
let incremento = 1;

const explosao = () => {
    // Adicione aqui o código para o efeito de explosão
    contadorElemento.textContent = "💥";
    // Por exemplo, você pode adicionar uma classe CSS para animar a explosão
    contadorElemento.classList.add("explosao");
};

const intervalo = setInterval(function() {
    contadorElemento.textContent = contador;
    
    // Aumenta o incremento quando o contador está próximo de 1500
    if (contador >= 1200 && contador < 1500) {
        incremento = 10; // Valor do incremento aumenta para acelerar a contagem
    } else {
        incremento = 1; // Mantém o incremento normal
    }
    
    contador += incremento;

    // Verifica se o contador atingiu ou ultrapassou 1500
    if (contador >= 1500) {
        // Chama a função de explosão
        explosao();
        // Limpa o intervalo para parar a contagem após a explosão
        clearInterval(intervalo);
    }
}, 200); // Intervalo de atualização em milissegundos
