# Gerenciando Variáveis de Ambientes com NPM

![Variáveis de ambiente](variaveis-de-ambiente.png)

## Dotenv File

Env = Environment (Ambiente)

Na raiz do projeto cria um arquivo .env

Para deixar em um ambiente privado, ele não pode ser versionado junto com a aplicação.

Colocamos esse arquivo no .gitignore 

No arquivo .gitignore (criamos ele na raiz do projeto):

```
node_modules/
.env
```

## Environment Variables

Declarar variáveis de ambiente: 

São formadas por chave -> valor
Geralmente as chaves são em maiúsculo.

No arquivo .env:

USERDATABASE="Cruso"
PASSWORDDATABASE="DIO"