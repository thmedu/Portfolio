  // Função para exibir ou ocultar o menu de opções de download
  function toggleDropdown() {
    var dropdown = document.getElementById("cvDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

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
  // Função para aumentar os contadores com animação
  const aumentarContadoresComAnimacao = () => {
    // Aumenta os contadores...
    contadorBugs++;
    contadorEstudo += 5; // Incremento de 5 horas de estudo por dia
    contadorRepositorios += 2; // Incremento de 2 repositórios por dia
    contadorCafe += 4; // Incremento de 4 xícaras de café por dia

    // Atualiza os elementos HTML com os novos valores de forma animada
    animateValue('contador-bugs', 0, contadorBugs, 1000);
    animateValue('contador-estudo', 0, contadorEstudo, 1000);
    animateValue('contador-repositorios', 0, contadorRepositorios, 1000);
    animateValue('contador-cafe', 0, contadorCafe, 1000);
};

// Função para animar o contador de forma suave
const animateValue = (id, start, end, duration) => {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
};

// Executa a função de aumentarContadoresComAnimacao imediatamente após a página ser carregada
window.addEventListener('load', () => {
    aumentarContadoresComAnimacao();
});


  // Função para fazer a requisição para a API do GitHub e preencher as habilidades
  async function fetchGitHubData() {
    const username = 'thmedu'; // Seu nome de usuário no GitHub
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Objeto para armazenar as informações das linguagens utilizadas nos repositórios
      const languages = {};

      // Loop através dos repositórios para contar as linguagens utilizadas
      data.forEach(repo => {
        const language = repo.language;
        if (language && language !== null) {
          if (languages[language]) {
            languages[language]++;
          } else {
            languages[language] = 1;
          }
        }
      });

      // Preencher dinamicamente as habilidades nas seções correspondentes
      fillSkills(languages);
    } catch (error) {
      console.error('Erro ao recuperar os dados do GitHub:', error);
    }
  }

  // Função para preencher dinamicamente as habilidades nas seções correspondentes
  function fillSkills(languages) {
    const librariesFrameworksSection = document.getElementById('skills_1');
    const languagesSection = document.getElementById('skills_2');

    // Limpar qualquer conteúdo existente nas seções
    librariesFrameworksSection.innerHTML = '';
    languagesSection.innerHTML = '';

    // Preencher a seção de bibliotecas e frameworks
    for (const language in languages) {
      if (Object.hasOwnProperty.call(languages, language)) {
        const skillValue = languages[language];
        const skillItem = document.createElement('div');
        skillItem.classList.add('clearfix');
        skillItem.innerHTML = `
          <h4>${language}</h4>
          <div class="skill-value">${skillValue}%</div>
          <div class="skill-container" data-value="${skillValue}">
            <div class="skill-percentage"></div>
          </div>
        `;
        librariesFrameworksSection.appendChild(skillItem);
      }
    }
  }

  // Chamar a função para recuperar os dados do GitHub quando a página carregar
  window.addEventListener('load', fetchGitHubData);
