# Projeto Carrinho de Compras da Shopee com Node.js
![Projeto Carrinho de Compras](https://cdni.iconscout.com/illustration/premium/thumb/cliente-com-carrinho-de-compras-compra-servico-digital-online-8047194-6462744.png?f=webp)

## Objetivo

Criar um carrinho de compras baseado no carrinho de compras da Shopee, onde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

## Lógica de criação (Arquitetura)

### Domínio da aplicação

O que o projeto precisa representar, as entidades.

Domínio da aplicação: carrinho de compras.

Entidades representadas:

* Carrinho
* Itens

Criar um módulo para cada entidade

### Ações/Assinaturas

Mapear as ações de cada entidade: Quais ações cada entidade terá.

Criar ideia das ações primeiro, em comentário

Carrinho: 
Quais ações que meu carrinho pode fazer?

* Adicionar um item no carrinho
* Deletar um item no carrinho
* Remover quantidade de item do carrinho - diminui 1 item
* Calcular total

Criar assinatura do método, os nomes das funções somente e se recebe algum parâmetro

Item:
Quais ações que meu item pode fazer?

* Criar um item com subtotal dele, conforme a quantidade de itens

## Anotações

Geralmente, a pasta services guarda a lógica e as regras de negócio de alguma entidade. Guardamos os módulos na pasta services