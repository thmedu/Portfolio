// Função para exibir ou ocultar o menu de opções de download
function toggleDropdown() {
    var dropdown = document.getElementById("cvDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}