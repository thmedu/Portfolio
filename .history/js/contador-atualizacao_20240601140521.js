// Função para exibir ou ocultar o menu de opções de download
function toggleDropdown() {
    var dropdown = document.getElementById("cvDropdown");
    if (!dropdown.classList.contains("show")) {
        dropdown.classList.add("show");
    } else {
        dropdown.classList.remove("show");
    }
}
