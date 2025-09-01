# Boas Práticas para APIS RESTful

## Utilização de Substantivos em Rotas

Usar substantivos plurais em rotas

✅ /users

❌ getUsers (os verbos são no método http e não na rota)

## Utilização de Métodos HTTP

* GET/products - recupera a lista/dado
* GET/products/{id} - filtra pelo id na lista
* POST/products/ - adiciona na lista
* PUT/products/{id} - atualiza toda a lista (por completo)
* PATCH/products/{id} - atualiza partes específicas da lista (parcial)
* DELETE/products/{id} - remove um item da lista

## Hierarquia e Aninhamento em Rotas

Criar URL que sigam uma estrutura hierárquica, de forma lógica

users/
    {userId}/
        orders/

Hierarquia de pastas: users/123/orders

users/ = representa o recurso
123/ = especifica o usuário
orders/ = especifica o pedido relacionado a esse usuário

## Nome de Ações - Endpoints

Evitar o uso de verbos ou ações nas URLs, como createUser ou deleteUser (utiliza o método HTTP para indicar a ação: GET/POST/PUT/DELETE, etc.)

## Versionamento de Rotas

Manter todas as versões da API, assim não quebra as aplicações que usam a API.

```
//versão 1
app.get('/v1/users', (req,res) => {})

//versão 2
app.get('/v2/users', (req,res) => {})
```

## Parâmetros de Consulta

Parâmetros de consulta (ou query parameters). Ficam após o ponto de interrogação (?). Os parâmetro enviados são separados por E comercial (&)

## Tratamento de Erros

Fazemos os tratamentos de erros com o Status Code HTTP.

![Status Code](./status-code.avif)