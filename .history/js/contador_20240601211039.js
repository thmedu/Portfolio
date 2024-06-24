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

// Função para aumentar um contador com animação suave
function increaseCounterWithAnimation(element, start, end, duration) {
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

// Função para buscar dados do GitHub e preencher as habilidades com animação
async function fetchGitHubData() {
  const username = 'thmedu'; // Seu nome de usuário no GitHub
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erro ao recuperar os dados do GitHub');
    }
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

// Função para aumentar os contadores com animação suave
function increaseCountersWithAnimation() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const start = 0;
    const end = parseInt(counter.textContent);
    const duration = 1000; // Duração da animação em milissegundos
    increaseCounterWithAnimation(counter, start, end, duration);
  });
}

// Chamar a função para recuperar os dados do GitHub quando a página carregar
window.addEventListener('load', () => {
  increaseCountersWithAnimation();
  fetchGitHubData();
});