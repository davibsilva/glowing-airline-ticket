<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Glowing Airline Ticket" />
  &#xa0;
</div>

<h1 align="center">Glowing Airline Ticket</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/davibsilva/glowing-airline-ticket?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/davibsilva/glowing-airline-ticket?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-license">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/davibsilva" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

API no padrão REST para suportar um sistema de venda de passagens aéreas


## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas neste projeto:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/v6/manual/getting-started.html)
- [Mysql](https://dev.mysql.com/doc/)

## :white_check_mark: Requisitos ##

Antes de começar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Instruções para rodar a API ##

```bash
# Clone o projeto
$ git clone https://github.com/davibsilva/glowing-airline-ticket

# Entre na pasta criada
$ cd glowing-airline-ticket

# Instale as dependências
$ npm install

# Crie um arquivo .env na raiz do projeto

# Copie o conteúdo do arquivo .env.example na raiz do projeto, cole no arquivo .env recém criado e substitua os valores das variáveis pelas informações da sua base mysql
Exemplo:
DB_USER=root
DB_PWD=12345678
DB_NAME=tickets
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql

# Rode as migrations
$ npx sequelize-cli db:migrate

# Rode o projeto
$ npm start

# O servidor irá iniciar em: <http://localhost:3000>
```

## :memo: Licença ##

Este projeto está sobre licença do MIT.


Feito com :heart: por <a href="https://github.com/davibsilva" target="_blank">Davi Silva</a>
&#xa0;

<a href="#top">Voltar ao topo</a>
