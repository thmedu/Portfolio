document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "skill-container"
    var skillContainers = document.querySelectorAll(".skill-container");

    // Itera sobre cada elemento com a classe "skill-container"
    skillContainers.forEach(function (skillContainer) {
        // Obtém o valor da habilidade do atributo "data-value" e converte para um número inteiro
        var skillValue = parseInt(skillContainer.getAttribute("data-value"));
        
        // Seleciona o elemento da barra de progresso dentro do container atual
        var skillProgress = skillContainer.querySelector(".skill-progress");
        
        // Anima a largura da barra de progresso para a porcentagem da habilidade
        animateProgressBar(skillProgress, skillValue);
    });
});

// Função para animar a barra de progresso
function animateProgressBar(progressBar, value) {
    // Define a largura da barra de progresso com base na porcentagem da habilidade
    progressBar.style.width = value + "%";
}
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "skill-container"
    var skillContainers = document.querySelectorAll(".skill-container");

    // Itera sobre cada elemento com a classe "skill-container"
    skillContainers.forEach(function (skillContainer) {
        // Obtém o valor da habilidade do atributo "data-value" e converte para um número inteiro
        var skillValue = parseInt(skillContainer.getAttribute("data-value"));
        
        // Seleciona o elemento da barra de progresso dentro do container atual
        var skillProgress = skillContainer.querySelector(".skill-progress");
        
        // Anima a largura da barra de progresso para a porcentagem da habilidade
        animateProgressBar(skillProgress, skillValue);
    });
});

// Função para animar a barra de progresso
function animateProgressBar(progressBar, value) {
    // Define a largura da barra de progresso com base na porcentagem da habilidade
    progressBar.style.width = value + "%";
}
