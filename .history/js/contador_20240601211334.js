// Função para exibir ou ocultar o menu de opções de download com animação
function toggleDropdown() {
  var dropdown = document.getElementById("cvDropdown");
  dropdown.classList.toggle("dropdown-visible");
}

// Definir os contadores iniciais e elementos HTML relacionados
const counters = {
  bugs: { element: document.getElementById('contador-bugs'), value: 500, dailyIncrease: 1 },
  study: { element: document.getElementById('contador-estudo'), value: 900, dailyIncrease: 3 },
  repositories: { element: document.getElementById('contador-repositorios'), value: 20, dailyIncrease: 2 },
  coffee: { element: document.getElementById('contador-cafe'), value: 1285, dailyIncrease: 5 }
};

// Função para aumentar os contadores com animação suave
function increaseCountersWithAnimation() {
  for (const key in counters) {
    const counter = counters[key];
    const start = 0;
    const end = counter.value;
    const duration = 1000; // Duração da animação em milissegundos
    animateValue(counter.element, start, end, duration);
  }
}

// Função para animar o contador de forma suave
function animateValue(element, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Chamada inicial para aumentar os contadores
increaseCountersWithAnimation();

// Função para fazer a requisição para a API do GitHub e preencher as habilidades
async function fetchGitHubData() {
  const username = 'thmedu'; // Seu nome de usuário no GitHub
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados do GitHub');
    }
    const data = await response.json();

    // Verificar se há dados válidos antes de preencher as habilidades
    if (data && data.length > 0) {
      const languages = {};

      // Loop através dos repositórios para contar as linguagens utilizadas
      data.forEach(repo => {
        const language = repo.language;
        if (language && language !== null) {
          languages[language] = (languages[language] || 0) + 1;
        }
      });

      // Preencher dinamicamente as habilidades nas seções correspondentes
      fillSkills(languages);
    } else {
      throw new Error('Nenhum dado válido encontrado no GitHub');
    }
  } catch (error) {
    console.error('Erro ao recuperar os dados do GitHub:', error);
  }
}

// Função para preencher dinamicamente as habilidades nas seções correspondentes
function fillSkills(languages) {
  const librariesFrameworksSection = document.getElementById('skills_1');

  // Limpar qualquer conteúdo existente na seção
  librariesFrameworksSection.innerHTML = '';

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
window.addEventListener('load', () => {
  increaseCountersWithAnimation();
  fetchGitHubData();
});
