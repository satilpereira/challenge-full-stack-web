## Decisão da arquitetura utilizada

### 1. Backend

Foi utilizado o Framework express para a criação de uma API REST.

A arquitetura utiliza o padrão MVC(Model, View, Controller).

Exemplo de estrutura de pastas:

```bash
src/api/v1
  controllers/
    StudentsCOntroller/
      createStudent/ # Lida com a lógica de negócio da rota
        schema/ # Validação do corpo da requisição com o zod
  models/
    StudentsModel/ # Extende o modelo base
      methods/ # Métodos específicos do modelo
      types/ # Declaração do módulo e interface para o modelo
  routes/
    studentsRouter/
  middlewares/ #
    responseHandler/ # Middleware para padronizar a resposta da API
  app.ts
```

<sub><sup>Essa estrutura é um exemplo e não necessariamente reflete a estrutura do projeto.</sup></sub>

Com essa arquitetura e organização, é possivel modularizar o código, facilitando a manutenção e escalabilidade do projeto. Além disso, criando interface para os _models_ é possível garantir a tipagem dos dados, evitando erros de tipagem.

Essa estrutura foi adaptada levando em consideração algumas particularidades do modelo service repository.

A conexão ao banco de dados utiliza o padrão singleton, para garantir que apenas uma conexão seja criada.

### 2. Camada de persistencia

Para a persistência dos dados foi utilizado o banco de dados MySQL 8, Com o ORM prisma para a criação de modelos, comunicação com o banco de dados, type safety e migrações.

### 3. Frontend

Foi utilizado o nuxt.js para a criação do frontend, com a estrutura de pastas padrão do nuxt, que já fornece uma estrutura de pastas bem organizada e modularizada. além de permitir a criação de componentes, páginas e layouts para a aplicação.

Para os componentes, a biblioteca Vuetify foi utilizada, para facilitar a criação de componentes visuais.

Para a estilização, foi utilizado o sass juntamente ao tailwindcss, para facilitar a estilização dos componentes.

### 4. Docker

Foi utilizado o docker para a criação de containers para o backend, frontend e o banco de dados, facilitando a execução do projeto em qualquer ambiente.

Além disso, foi criado um arquivo docker-compose para facilitar a execução de todos os containers simultaneamente.

E para fechar, um makefile foi criado para facilitar a execução de comandos, para produção e desenvolvimento.

o comando `make dev` executa o projeto em modo de desenvolvimento, com hot reload para o frontend e backend.

O foco é permitir que o desenvolvimento seja facilitado para os desenvolvedores, com a execução de um único comando, garantindo o mesmo ambiente de desenvolvimento para todos, já configurado.

## Lista de bibliotecas de terceiros utilizadas

### Backend

```json
{
  "dependencies": {
    "@prisma/client": "^6.3.0",
    "prisma": "^6.3.0",
    "bcrypt": "^5.1.1",
    "chalk": "^4.1.2",
    "cors": "^2.8.5",
    "express": "^4.21.0",
    "jsonwebtoken": "^9.0.0",
    "moment": "^2.29.4",
    "swagger-ui-express": "^5.0.1",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "uuid": "^10.0.0",
    "xss-clean": "^0.1.4",
    "zod": "^3.23.8"
  }
}
```

### Frontend

```json
{
  "dependencies": {
    "@mdi/font": "^7.4.47",
    "nuxt": "^3.15.3",
    "sass": "^1.83.4",
    "vue": "latest",
    "vue-router": "latest"
  },
  "devDependencies": {
    "@types/node": "^22.13.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1",
    "tailwindcss": "^3.4.17",
    "vite-plugin-vuetify": "^2.0.4",
    "vuetify": "^3.7.9"
  }
}
```

## O que você melhoraria se tivesse mais tempo

Dado mais tempo, eu melhoraria a documentação do projeto, Implementaria testes unitários com o jest para a API, e testes end-to-end com o cypress para o frontend.

Criaria uma pipeline de CI/CD para o projeto, para executar os testes e buildar o projeto, garantir a qualidade do código e a entrega contínua.

Criaria a documentação utilizando o swagger juntamente com o swagger-ui-express, para facilitar a visualização e teste da API, os quais realizei com o APIDog; assim como também utilizaria o swagger auto-gen para a geração automática da documentação.

Implementaria um sistema de autenticação e autorização para a API, utilizando o JWT e no frontend criaria um middleware básico para verificar se o usuário está autenticado.

Criaria um sistema para automatizar os commits, utilizando o commitizen e o husky, para garantir que os commits sigam um padrão.

Implementaria um sistema de versionamento semântico para o projeto, para garantir que as versões sejam incrementadas de acordo com as alterações realizadas. Assim como também criaria um changelog para o projeto.

## Quais requisitos obrigatórios que não foram entregues

Rotas de edição, exclusão e listagem de estudantes não foram implementadas.

O frontend não foi finalizado.
