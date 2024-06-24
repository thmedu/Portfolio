document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        const description = project.querySelector('.project-description');
        const descriptionText = description.textContent.trim();

        if (descriptionText.length > 20) {
            // Adicionar evento de clique para expandir/diminuir a descrição do projeto
            project.addEventListener('click', function() {
                project.classList.toggle('expanded');
                const description = project.querySelector('.project-description');
                const expandIcon = project.querySelector('.expand-icon');

                if (project.classList.contains('expanded')) {
                    description.classList.remove('truncate-description');
                    expandIcon.innerHTML = '&#9650;'; // Símbolo de seta para cima
                } else {
                    description.classList.add('truncate-description');
                    expandIcon.innerHTML = '&#9660;'; // Símbolo de seta para baixo
                }
            });
        }
    });
});
