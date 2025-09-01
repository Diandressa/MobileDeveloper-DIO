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

Criar URL que sigam uma estrutura hierárquica

Documentos/
    Trabalho/
        Relatorios/

Hierarquia de pastas: Documentos/Trabalho/Relatórios