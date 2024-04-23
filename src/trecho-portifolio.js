// Importa o módulo 'fs' (sistema de arquivos) do Node.js para lidar com operações de arquivo
const fs = require('fs');

// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivo
const path = require('path');

// Função para atualizar o portfólio com informações de um novo projeto
function updatePortfolio(projectName) {
  // Define o caminho do arquivo de portfólio
  const portfolioPath = "C:\\Users\\thmed\\OneDrive\\Documentos\\GitHub\\portifolio\\portfolio.html";

  // Trecho de HTML que será adicionado ao portfólio para o novo projeto
  const trechoPortfolio = `
  
                    <!-- Início do Projeto ${projectName} -->
                    <div class="portfolio-grid three-columns shuffle">
                    
                      <figure class="item standard" data-groups='["category_all", "category_detailed"]'>
                        <div class="portfolio-item-img">
                          <img src="./Projetos/${projectName}/img/image1.png" alt="${projectName}" title="${projectName}" />
                          <a href="./Projetos/${projectName}/${projectName}-coluna.html" class="ajax-page-load"></a>
                        </div>

                        <i class="far fa-file-alt"></i>
                        <h4 class="name">${projectName}</h4>
                        <span class="category">Detalhes</span>
                      </figure>
                    
                      <figure class="item lbimage" data-groups='["category_all", "category_image"]'>
                        <div class="portfolio-item-img">
                          <img src="./Projetos/${projectName}/img/image2.png" alt="${projectName}" title="${projectName}" />
                          <a class="lightbox" title="${projectName}" href="./Projetos/${projectName}/img/image2.png"></a>
                        </div>
                        <!-- Nome do ${projectName} -->
                        <i class="fa fa-image"></i>
                        <h4 class="name">Imagens</h4>
                        <span class="category">Clique</span>
                      </figure>
                      <!-- Início do ${projectName} "category_all",  "category_direct-url" -->
                      <figure class="item direct" data-groups='["category_all", "category_direct-url"]'>
                        <div class="portfolio-item-img">
                          <img src="./Projetos/${projectName}/img/image3.png" alt="Direct URL"
                            title="Card the auto online" />
                          <a target="_blank" href="https://project-gtav.netlify.app/"></a>
                        </div>
                        <!-- Nome do Projeto -->
                        <i class="fa fa-link"></i>
                        <h4 class="name">Site</h4>
                        <span class="category">URL</span>
                      </figure>
                    </div>
                    <!-- Fim dos Projeto ${projectName} -->
                  
    `;

  // Lê o conteúdo atual do arquivo de portfólio
  fs.readFile(portfolioPath, 'utf8', (err, data) => {
    if (err) {
      // Em caso de erro ao ler o arquivo, exibe uma mensagem de erro
      console.error('Erro ao ler o arquivo de portfólio:', err);
      return;
    }

    // Encontra a posição onde será inserido o novo trecho de portfólio
    const index = data.indexOf('<!-- Fim dos Projetos -->');
    if (index === -1) {
      // Se o marcador de fim dos projetos não for encontrado, exibe uma mensagem de erro
      console.error('Trecho de fim dos projetos não encontrado.');
      return;
    }

    // Insere o novo trecho de portfólio antes do marcador de fim dos projetos
    const newData = data.slice(0, index) + trechoPortfolio + data.slice(index);

    // Escreve os dados atualizados no arquivo de portfólio
    fs.writeFile(portfolioPath, newData, (err) => {
      if (err) {
        // Em caso de erro ao escrever no arquivo, exibe uma mensagem de erro
        console.error('Erro ao escrever no arquivo de portfólio:', err);
        return;
      }
      // Se a operação for bem-sucedida, exibe uma mensagem de sucesso
      console.log(`Trecho de portfólio para "${projectName}" adicionado com sucesso.`);
    });
  });
}

// Exporta a função para ser utilizada em outros arquivos
module.exports = updatePortfolio;
