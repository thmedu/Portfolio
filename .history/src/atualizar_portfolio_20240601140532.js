// Importa o módulo 'fs' (sistema de arquivos) do Node.js para lidar com operações de arquivo
const fs = require('fs');

// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivo
const path = require('path');

// Importa o módulo 'readline' do Node.js para lidar com entrada de usuário através do console
const readline = require('readline');

// Cria uma interface de leitura para entrada de usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para solicitar a descrição ao usuário e chamar a função de atualização do portfólio
function solicitarDescricao() {
  rl.question('Qual é a descrição do projeto? ', (descricao) => {
    rl.question('Qual é a tecnologia utilizada no projeto? ', (tecnologia) => {
      rl.question('Qual é o site do projeto? ', (site) => {
        // Quando o usuário inserir todas as informações, a função será chamada para prosseguir com a atualização do portfólio
        updatePortfolio(projectName, descricao, tecnologia, site);
        rl.close();
      });
    });
  });
}

// Função para atualizar o portfólio com Description de um novo projeto
function updatePortfolio(projectName, Description, Tecnologia, Site) {
  // Define o caminho do arquivo de portfólio
  const portfolioPath = `C:\\Users\\thmed\\OneDrive\\Documentos\\GitHub\\portifolio\\${projectName}-colunas.html`;
  // Trecho de HTML que será adicionado ao portfólio para o novo projeto
  const trechoPortfolio = `
  
                    <!-- Início da Description ${projectName} -->

                    <div class="col-sm-4 col-md-4 portfolio-block">
                    <!-- Project Description -->
                    <div class="project-description">
                        <div class="block-title">
                            <h3>Descrição</h3>
                        </div>
                        <ul class="project-general-info">
                            <li><p><i class="fa fa-user"></i>Thomas</p></li>
                            <li><p><i class="fa fa-globe"></i> <a href="${Site}" target="_blank">Ver Site</a></p></li>
                            <li><p><i class="fa fa-calendar"></i> Fevereiro, 2024</p></li>
                        </ul>
      
                        <p class="text-justify">${Description}.</p>
                        <!-- /Project Description -->
      
                        <!-- Technology -->
                        <div class="tags-block">
                            <div class="block-title">
                                <h3>Tecnologia</h3>
                            </div>
                            <ul class="tags">
                                <li><a>${Tecnologia}</a></li>
                                <li><a>${Tecnologia}</a></li>
                                <li><a>${Tecnologia}</a></li>
                                <li><a>${Tecnologia}</a></li>
                            </ul>
                        </div>
                        <!-- /Technology -->

                    <!-- Fim da Description  ${projectName} -->
                  
    `;

  // Lê o conteúdo atual do arquivo de portfólio
  fs.readFile(portfolioPath, 'utf8', (err, data) => {
    if (err) {
      // Em caso de erro ao ler o arquivo, exibe uma mensagem de erro
      console.error('Erro ao ler o arquivo de portfólio:', err);
      return;
    }

    // Encontra a posição onde será inserido o novo trecho de portfólio
    const index = data.indexOf('<!-- Início da Description -->');
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

// Chama a função para solicitar a descrição ao usuário
solicitarDescricao();
