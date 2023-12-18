# Sistema de Agendamento de Doação de Sangue

A atividade-pratica-01 é o desenvolvimento de uma API RESTful para as entidades: tipos sanguineos, pessoas, locais de coleta, doações, cidades e estados. Possuindo as seguintes operações para cada entidade:

- Inserir - create
- Atualizar - update
- Excluir - delete
- Recuperar - read - todos os itens, por id e por nome (quando se aplicar).

## Instalação

- Abrir um terminal na pasta: /server
- Criar arquivo .env 
- colocar dentro do .env: DATABASE_URL="file:./aplicacao.sqlite"
- npm install (instalando as depedências necessárias)
- npm run dev (para inciar o servidor)
- server.rest (contém as operações que podem ser executadas, baixar extensão REST Client) 
- Localhost: http://localhost:5555/pessoa

## Tecnologias 

- **JavaScript:** Linguagem de programação principal para o desenvolvimento do backend.
- **Prisma:** ORM (Object-Relational Mapping) utilizado para facilitar a interação com o banco de dados SQLite.
- **SQLite:** Banco de dados escolhido para armazenamento de dados.

## Arquitetura

src
  - |_ controller/*
        |_[C,R,U,D]_ - Controllers utilizados. 
  - |_ database
        |_ client.js  
  - |_ routes 
  - |_ server.js
  - package.json
