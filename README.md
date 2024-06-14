# ramengo_API

Esta é uma API que tem como finalidade consumir outra api externa e realizar requisições e manipulação de dados.

## Tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- dotenv

## Iniciando a aplicação

Siga os passos abaixo para poder rodar a aplicação no seu servidor local:

1. Instale o Node.js (v => 18)

2. Rode o comando abaixo para instalar todas as dependencias:

```
npm install
```

3. Crie um arquivo chamado `.env` na raiz do projeto, fora da pasta src e defina as variaveis de ambiente para sua api key

```
API_KEY= sua_chave

```

5. Rode o comando abaixo para iniciar o servidor:

```
npm run dev
```
## Endpoints
<br/>

| Método | Endpoint                | Responsabilidade                                 
| GET    | /broths                 | busca todos caldos disponíveis        
| GET    | /proteins               | busca todas proteínas disponíveis
| POST   | /orders                 | faz um pedido                    


## Requisições

para todas as requisições é preciso passar a api-key no header: 

```
api-key: value
```

rota post: necessário passar body com o json no seguinte formato

body
```
{
    "brothId:"1",
    "proteinId":"1"
}
```
