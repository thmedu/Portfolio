// Importação dos módulos 'fs' (file system) e 'path' para manipulação de arquivos e caminhos de diretórios
const fs = require('fs');
const path = require('path');
const updatePortfolio = require('./src/trecho-portifolio'); // Importação do módulo updatePortfolio

// Obtenção do nome do projeto fornecido como argumento ao executar o script
const projectName = process.argv[2];

// Verificação se o nome do projeto foi fornecido como argumento
if (!projectName){
    // Exibição de mensagem de erro caso o nome do projeto não tenha sido fornecido
    console.error('Por favor, forneça o nome do seu projeto como argumento.');
    process.exit(1); // Finaliza a execução do script com status de erro
}

// Diretório específico onde deseja criar o projeto
const projectsDir = "C:\\Users\\thmed\\Documentos\\GitHub\\portifolio\\Projetos";

// Caminho completo para o diretório do projeto com base no nome fornecido
const projectDir = path.join(projectsDir, projectName);

try {
    // Verifica se o diretório do projeto já existe
    if (!fs.existsSync(projectDir)) {
        // Criação do diretório do projeto
        fs.mkdirSync(projectDir);
        console.log(`Diretório do projeto criado em: ${projectDir}`);

        // Caminho completo para o diretório 'img' dentro do projeto
        const imgDir = path.join(projectDir, 'img');
        // Criação do diretório 'img' dentro do projeto
        fs.mkdirSync(imgDir);
        console.log(`Diretório 'img' criado em: ${imgDir}`);

        // Caminhos para os arquivos HTML dentro do diretório do projeto
        const conteudoP1Path = path.join(__dirname, 'src', 'conteudo-portifolio.html');
        const conteudoP2Path = path.join(__dirname, 'src', 'conteudo-coluna.html');

        // Lê o conteúdo do arquivo conteudo_p1.html
        let htmlContent1 = fs.readFileSync(conteudoP1Path, 'utf8');
        // Substitui todas as ocorrências de "${projectName}" pelo nome do projeto
        htmlContent1 = htmlContent1.replace(/\${projectName}/g, projectName);
        // Caminho completo para o arquivo HTML dentro do diretório do projeto
        const htmlFile1 = path.join(projectDir, `${projectName}-portifolio.html`);
        // Escreve o conteúdo no arquivo HTML dentro do diretório do projeto
        fs.writeFileSync(htmlFile1, htmlContent1);
        console.log(`Arquivo HTML ${projectName}-portifolio.html criado em: ${htmlFile1}`);

        // Lê o conteúdo do arquivo conteudo_p2.html
        let htmlContent2 = fs.readFileSync(conteudoP2Path, 'utf8');
        // Substitui todas as ocorrências de "${projectName}" pelo nome do projeto
        htmlContent2 = htmlContent2.replace(/\${projectName}/g, projectName);
        // Caminho completo para o arquivo HTML dentro do diretório do projeto
        const htmlFile2 = path.join(projectDir, `${projectName}-coluna.html`);
        // Escreve o conteúdo no arquivo HTML dentro do diretório do projeto
        fs.writeFileSync(htmlFile2, htmlContent2);
        console.log(`Arquivo HTML ${projectName}-coluna.html criado em: ${htmlFile2}`);

        // Atualiza o arquivo portfolio.html com os dados do novo projeto
        updatePortfolio(projectName);

        // Exibição de mensagem de sucesso indicando que o projeto foi criado com sucesso
        console.log(`Projeto ${projectName} criado com sucesso!`);
    } else {
        console.error(`O diretório do projeto ${projectName} já existe.`);
    }
} catch (error) {
    console.error(`Erro ao criar o projeto: ${error}`);
}
