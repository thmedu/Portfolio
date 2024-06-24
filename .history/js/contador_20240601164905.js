// Função para exibir ou ocultar o menu de opções de download com animação
function toggleDropdown() {
  var dropdown = document.getElementById("cvDropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    dropdown.classList.add("fadeInDown");
  } else {
    dropdown.classList.remove("fadeInDown");
    dropdown.classList.add("fadeOutUp");
    setTimeout(() => {
      dropdown.style.display = "none";
      dropdown.classList.remove("fadeOutUp");
    }, 500);
  }
}

// Definir os contadores iniciais e elementos HTML relacionados
const counters = {
  bugs: { element: document.getElementById('contador-bugs'), value: 500, dailyIncrease: 1 },
  study: { element: document.getElementById('contador-estudo'), value: 900, dailyIncrease: 3 },
  repositories: { element: document.getElementById('contador-repositorios'), value: 20, dailyIncrease: 2 },
  coffee: { element: document.getElementById('contador-cafe'), value: 1285, dailyIncrease: 5 }
};

// Função para aumentar os contadores com animação suave
const increaseCountersWithAnimation = () => {
  for (const key in counters) {
      const counter = counters[key];
      counter.value++;
      animateValue(counter.element, 0, counter.value, 1000);
  }
};

// Função para animar o contador de forma suave
const animateValue = (element, start, end, duration) => {
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
};

// Chamada inicial para aumentar os contadores
increaseCountersWithAnimation();

// Função para fazer a requisição para a API do GitHub e preencher as habilidades com animação
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
              languages[language] = (languages[language] || 0) + 1;
          }
      });

      // Preencher dinamicamente as habilidades nas seções correspondentes
      fillSkills(languages);
  } catch (error) {
      console.error('Erro ao recuperar os dados do GitHub:', error);
  }
}

// Função para preencher dinamicamente as habilidades nas seções correspondentes com animação
function fillSkills(languages) {
  const librariesFrameworksSection = document.getElementById('skills_1');

  // Limpar qualquer conteúdo existente na seção
  librariesFrameworksSection.innerHTML = '';

  // Preencher a seção de bibliotecas e frameworks com animação
  for (const language in languages) {
      if (Object.hasOwnProperty.call(languages, language)) {
          const skillValue = languages[language];
          const skillItem = document.createElement('div');
          skillItem.classList.add('clearfix', 'animated', 'fadeInUp');
          skillItem.style.animationDelay = '0.5s'; // Adiciona um atraso para cada item animado
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
