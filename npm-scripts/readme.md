# Npm Scripts

Com scripts consigo rodar mais de um comando uma única vez

## Script Field

No package.json:

```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
```

script field:

"scripts": {},

script test:

test é o alias no script, o apelido 

Quando passo o próximo comando uso  &&:

1 comando: "echo \"Error: no test specified\" 
2 comando: exit 1

## Rodar o script

No terminal:

`npm run nome-script`

Exemplo:

`npm run test`

## Vscode View npm scripts

Podemos rodar o script pelo package.json:

![Vscode View npm scripts](../vscode%20view%20npm%20script.png)

Ir no vscode, ao lado de Explores > ... > ativar o npm script

![Vscode View npm scripts](../vscode%20view%20npm%20script%20-%20config.png)

Isso ativa a barra inferior de NPM SCRIPTS 

![Vscode View npm scripts](../vscode%20view%20npm%20script%20-%20ativa-barra.png)

Dar play para rodar o script

![Vscode View npm scripts](../vscode%20view%20npm%20script%20-%20play.png)
