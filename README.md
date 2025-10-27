# 💡 Banco de Ideias Digital - Projeto Meninas Digitais

## 📝 Descrição do Projeto

Este projeto consiste no desenvolvimento de um **Banco de Ideias Digital**, uma aplicação web colaborativa para o projeto Meninas Digitais. O objetivo central é **centralizar, organizar e acompanhar** as sugestões e propostas de melhoria, garantindo transparência, participação ativa e maior aproveitamento das contribuições internas e externas.

A ferramenta permitirá que participantes, voluntários e envolvidos registrem, consultem, avaliem e acompanhem ideias, categorizando-as por área de interesse e definindo seu status em tempo real (ex.: pendente, em análise, aprovada, implementada).

**O sistema busca resolver/atender:**
* **Centralização das ideias:** Reunir todas as propostas em um único ambiente digital.
* **Organização estruturada:** Registrar sugestões com título, descrição, categoria, status, autor e data de submissão.
* **Participação colaborativa:** Fomentar a contribuição ativa de membros internos e colaboradores externos.
* **Acompanhamento transparente:** Dar visibilidade ao processo de avaliação e seleção das ideias.
* **Apoio à tomada de decisão:** Gerar relatórios e históricos para auxiliar na priorização e implementação das ideias mais viáveis.

## ✨ Funcionalidades Principais (Requisitos Funcionais)

O sistema oferecerá as seguintes funcionalidades:

* **Cadastro de Ideias:** Registro de novas ideias com título, descrição, categoria e autor.
* **Consulta de Sugestões:** Visualização e busca de ideias existentes através de filtros.
* **Edição e Exclusão de Ideias:** Permitida para administradores e autores das ideias.
* **Classificação por Categorias:** Organização das ideias conforme áreas de interesse definidas.
* **Controle de Status:** Definição do andamento da ideia (pendente, em análise, aprovada, rejeitada, implementada) por avaliadores.
* **Gerenciamento de Usuários:** Controle de permissões (administrador, membro, voluntário externo, avaliador).
* **Interação:** Possibilidade de interagir com as propostas por meio de *feedbacks* (comentários).

## 💻 Tecnologias e Ferramentas

O desenvolvimento será realizado utilizando as seguintes tecnologias modernas:

| Categoria | Tecnologia/Ferramenta | Detalhes |
| :--- | :--- | :--- |
| **Linguagem** | JavaScript / TypeScript | Utilizada para o desenvolvimento do **Front-end** e **Back-end**. |
| **Front-end** | React.js | Construção da interface web, visando uma experiência interativa e responsiva. |
| **Back-end** | Node.js com Express.js | Responsável pela lógica de negócio e comunicação com os serviços. |
| **Banco de Dados** | Firebase (Cloud Firestore) | Banco de dados NoSQL em nuvem para armazenamento em tempo real de ideias e informações. |
| **Autenticação** | Firebase Authentication | Gerenciamento de autenticação segura (e-mail/senha ou contas externas). |
| **IDE** | Visual Studio Code (VS Code) | IDE principal utilizada para desenvolvimento colaborativo. |
| **Hospedagem (Deploy)** | Vercel | Plataforma de hospedagem para Front-end e Back-end, garantindo escalabilidade e integração contínua. |
| **Versionamento** | GitHub | Versionamento de código, armazenamento de artefatos e acompanhamento de tarefas via *issues* e *pull requests*. |

## Figma do Projeto

[Design do Figma](https://www.figma.com/design/rsPy2n9luKmWDx0bj30x8U/Certificadora-3?node-id=15-4&t=DhI5lr8KywxInAKn-1)

## 🧑‍💻 Equipe de Desenvolvimento

O projeto é desenvolvido por alunos do Bacharelado em Engenharia de Computação da Universidade Tecnológica Federal do Paraná (UTFPR), Câmpus Cornélio Procópio.

| Membro | Matrícula | Principais Frentes |
| :--- | :--- | :--- |
| **Amanda Moura Cavalcante** | 2261049 | Definição do design das telas e protótipos (Front-end). |
| **Melina Alves Gonçalves** | 2312727 | Implementação das telas em HTML, CSS e JavaScript (Front-end). |
| **Davi Regonatti Rodrigues** | 2346389 | Desenvolvimento da API (Node.js/Express.js) e criação das rotas principais (Back-end). |
| **Victor Henrique Paulo Lopes Pereira** | 2337584 | Desenvolvimento da API (Node.js/Express.js), Modelagem do Banco de Dados e Documentação Técnica (Back-end/BD). |

## ⚙️ Cronograma de Execução (Semanas)

| Semana | Atividade Principal |
| :--- | :--- |
| **1** | Levantamento de requisitos detalhados e definição dos usuários do sistema. |
| **2** | Modelagem do banco de dados e definição da arquitetura do sistema. |
| **3** | Criação dos protótipos de telas e configuração do ambiente de desenvolvimento. |
| **4** | Implementação inicial do Back-end (autenticação de usuários e CRUD de ideias). |
| **5 (Entrega Parcial)** | Desenvolvimento inicial do Front-end (estrutura base e telas principais). |
| **6** | Integração entre Front-end e Back-end (código funcional básico integrado). |
| **7** | Implementação de funcionalidades adicionais (votos, comentários e filtros). |
| **8** | Implementação de notificações e relatórios do sistema. |
| **9** | Testes de usabilidade, correção de falhas e ajustes finais. |
| **10 (Entrega Final)** | Preparação da documentação consolidada, gravação do vídeo final e deploy do sistema. |

## 🔗 Link do Repositório (Oficial)

O código-fonte e todos os artefatos do projeto estão armazenados neste repositório:
**`https://github.com/mel-a8/Certificadora 3 GitHub`**

**Conteúdo do Repositório:**
* Código do front-end e back-end.
* Estrutura do banco de dados no Firebase.
* Documentação do projeto (relatórios, manuais de uso, README).
* Artefatos complementares (diagramas, imagens, vídeos de apresentação).


## 🛠️ Roteiro de Instalação e Configuração

Este roteiro cobre as etapas essenciais para configurar o ambiente de desenvolvimento, conforme as tecnologias definidas no projeto.

### 1. Visual Studio Code (VS Code) 

O VS Code será a IDE principal utilizada por toda a equipe para o desenvolvimento colaborativo.

| Etapa | Instruções |
| :--- | :--- |
| **Instalação** | Acesse o site oficial do VS Code, baixe o instalador compatível com seu sistema operacional (Windows, macOS ou Linux) e execute-o, seguindo as instruções padrão. |
| **Uso** | Após a instalação, abra o VS Code. Utilize a aba de **Extensões** (Ctrl+Shift+X) para instalar extensões úteis para desenvolvimento React, Node.js e TypeScript, como: Prettier, ESLint, e extensões para manipulação de Firebase. |

### 2. Node.js 

Necessário para rodar o ambiente de desenvolvimento JavaScript, o *backend* (com Express.js) e o gerenciador de pacotes (`npm`).

| Etapa | Instruções |
| :--- | :--- |
| **Instalação** | Baixe a versão mais recente do Node.js no site oficial. O instalador incluirá automaticamente o gerenciador de pacotes `npm`. |
| **Verificação** | Abra o terminal ou Prompt de Comando e digite: `node -v` e `npm -v`. As versões instaladas devem ser exibidas. |

### 3. Vite (para Criação do Projeto React)

O Vite é um *tooling* moderno para desenvolvimento *frontend* que utiliza o Node.js. Embora o projeto mencione diretamente React.js, Node.js e Express.js, o Vite é comumente usado para iniciar o projeto React com TypeScript/JavaScript.

| Etapa | Instruções |
| :--- | :--- |
| **Criação do Projeto** | No terminal, dentro da pasta de destino do projeto, execute o comando (substituindo `meu-app-banco-ideias` pelo nome desejado). |
| **Configuração** | Entre na pasta do projeto recém-criado: `cd banco-de-ideias` e instale as dependências: `npm install`. |
| **Compilação/Execução** | Para iniciar o ambiente de desenvolvimento: `npm run dev`. |

### 4. Firebase (Cloud Firestore e Authentication)

Utilizado como Banco de Dados NoSQL (Cloud Firestore) e para o gerenciamento de autenticação segura (Firebase Authentication).

| Etapa | Instruções |
| :--- | :--- |
| **Criação do Projeto** | Acesse o **Console do Firebase** e crie um novo projeto. |
| **Configuração do SDK** | No Console, adicione uma aplicação web ao seu projeto. O Firebase fornecerá as chaves de configuração (variáveis de ambiente, como API Key e Project ID). |
| **Instalação no Projeto** | No terminal do seu projeto, instale os SDKs necessários: `npm install firebase`. |
| **Uso no Código** | No código, importe os módulos necessários (ex.: `getFirestore`, `getAuth`) e inicialize o Firebase com as chaves de configuração. |

### 5. Figma


| Etapa | Instruções |
| :--- | :--- |
| **Acesso/Instalação** | O Figma é uma ferramenta baseada em navegador (acessível online). Opcionalmente, baixe o aplicativo desktop no site oficial. |
| **Uso** | Acessar o ambiente de trabalho e criar um novo projeto para o protótipo do Banco de Ideias. Os protótipos servirão como guia visual para a implementação das telas em React. |
