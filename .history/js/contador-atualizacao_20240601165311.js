// Função para exibir ou ocultar o menu de opções de download
function toggleDropdown() {
    var dropdown = document.getElementById("cvDropdown");
    if (!dropdown.classList.contains("show")) {
        dropdown.classList.add("show");
    } else {
        dropdown.classList.remove("show");
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var animatedIcons = document.querySelectorAll('.animated-icon');
    animatedIcons.forEach(function(icon) {
        icon.classList.add('animate-icon'); // Adiciona a classe para iniciar a animação
    });
});
