const fs = require('fs');
const path = require('path');
const updatePortfolio = require('./src/trecho-portifolio');

const projectName = process.argv[2];

if (!projectName) {
    console.error('Por favor, forneça o nome do seu projeto como argumento.');
    process.exit(1);
}

// Diretório onde deseja criar o projeto (padrão: diretório atual)
let projectsDir = path.join(__dirname, 'Projetos');

// Verifica se o script está sendo executado no OneDrive
if (__dirname.includes('OneDrive')) {
    // Altera o diretório de projetos para o local no OneDrive
    projectsDir = "C:\\Users\\thmed\\OneDrive\\Documentos\\GitHub\\portifolio\\Projetos";
}

const projectDir = path.join(projectsDir, projectName);

try {
    if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir);
        console.log(`Diretório do projeto criado em: ${projectDir}`);

        const imgDir = path.join(projectDir, 'img');
        fs.mkdirSync(imgDir);
        console.log(`Diretório 'img' criado em: ${imgDir}`);

        const conteudoP1Path = path.join(__dirname, 'src', 'conteudo-portifolio.html');
        const conteudoP2Path = path.join(__dirname, 'src', 'conteudo-coluna.html');

        let htmlContent1 = fs.readFileSync(conteudoP1Path, 'utf8');
        htmlContent1 = htmlContent1.replace(/\${projectName}/g, projectName);
        const htmlFile1 = path.join(projectDir, `${projectName}-portifolio.html`);
        fs.writeFileSync(htmlFile1, htmlContent1);
        console.log(`Arquivo HTML ${projectName}-portifolio.html criado em: ${htmlFile1}`);

        let htmlContent2 = fs.readFileSync(conteudoP2Path, 'utf8');
        htmlContent2 = htmlContent2.replace(/\${projectName}/g, projectName);
        const htmlFile2 = path.join(projectDir, `${projectName}-coluna.html`);
        fs.writeFileSync(htmlFile2, htmlContent2);
        console.log(`Arquivo HTML ${projectName}-coluna.html criado em: ${htmlFile2}`);

        updatePortfolio(projectName);

        console.log(`Projeto ${projectName} criado com sucesso!`);
    } else {
        console.error(`O diretório do projeto ${projectName} já existe.`);
    }
} catch (error) {
    console.error(`Erro ao criar o projeto: ${error}`);
}
