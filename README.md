<h1 align="center">Clean Taxi Ride</h1>

<p align="center">Projeto de Corrida de Taxi criado com Clean Code, TDD e Padrões de Projeto</p>

## Branches

* `taxi-ride-code-smells` código inicial, cheio de code smells, porém, passando nos testes
* `taxi-ride-clean-code` código refatorado de forma mais "ingênua"
* `taxi-ride-design-patterns` código refatorado com Design Patterns

## Passo a passo

1. `npm install` instale as dependências do projeto
2. `npm run test` execute os testes, eles são o único driver (cliente) para esta aplicação
3. `npm run test:coverage` embora o código esteja cheirando mal, suas regras de negócios estão 100% cobertas pelos testes. Após a execução do comando abra o arquivo [coverage/index.html](./coverage/index.html) no navegador para uma melhor visualização
