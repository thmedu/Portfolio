const contadorBugsElemento = document.getElementById('contador-bugs');
const contadorEstudoElemento = document.getElementById('contador-estudo');
const contadorRepositoriosElemento = document.getElementById('contador-repositorios');
const contadorCafeElemento = document.getElementById('contador-cafe');

let contadorBugs = 500;
let contadorEstudo = 900;
let contadorRepositorios = 10; // Inicializando com 10 como especificado no HTML
let contadorCafe = 1285; // Inicializando com 1285 como especificado no HTML

const explosao = () => {
    // Adicione aqui o código para o efeito de explosão
    contadorBugsElemento.textContent = "💥";
    // Por exemplo, você pode adicionar uma classe CSS para animar a explosão
    contadorBugsElemento.classList.add("explosao");
};

const aumentarContadores = () => {
    // Aumenta os contadores...
    contadorBugs++;
    contadorEstudo += 5; // Incremento de 5 horas de estudo por dia
    contadorRepositorios += 2; // Incremento de 2 repositórios por dia
    contadorCafe += 4; // Incremento de 4 xícaras de café por dia
    
    // Atualiza os elementos HTML com os novos valores
    contadorBugsElemento.textContent = contadorBugs;
    contadorEstudoElemento.textContent = contadorEstudo;
    contadorRepositoriosElemento.textContent = contadorRepositorios;
    contadorCafeElemento.textContent = contadorCafe;

    // Adiciona a classe de rotação aos elementos dos ícones, exceto o ícone de bug
    contadorEstudoElemento.querySelector('i').classList.add('rotate');
    contadorRepositoriosElemento.querySelector('i').classList.add('rotate');
    contadorCafeElemento.querySelector('i').classList.add('rotate');

    // Remove a classe de rotação após um curto período de tempo
    setTimeout(() => {
        contadorEstudoElemento.querySelector('i').classList.remove('rotate');
        contadorRepositoriosElemento.querySelector('i').classList.remove('rotate');
        contadorCafeElemento.querySelector('i').classList.remove('rotate');
    }, 1000);
};

// Executa a função de aumentarContadores() imediatamente após a página ser carregada
window.addEventListener('load', () => {
    aumentarContadores();
});
