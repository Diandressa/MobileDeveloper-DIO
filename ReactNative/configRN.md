# Configuração do ambiente de desenvolvimento para React Native

## Pré requisitos

* VSCode
* Nodejs e NPM
* Expo

## Expo

Ele é um project builder (auxilia no desenvolvimento de apps), aumenta a produtividade.

Posso criar templates de projetos e estrutura das pastas rapidamente.

## Executar Expo com npx

https://expo.dev/tools#cli

`npx create-expo-app`

Posso nomear o aplicativo no final do comando:

`npx create-expo-app my-app -t`

Não posso utilizar espaço no nome do aplicativo, recomenda-se separar com traço

-t o expo permite que eu escolha templates, sem o -t ele instala o template mais comum

Escolher o Blank (Typescript)

Entro com cd no diretório.

`cd my-app`

## package.json vs app.json

Os scripts então em package.json

"O package.json é o coração do projeto e o app.json o coração do app" - Felipe Aguiar

O package.json engloba todo o ambiente de desenvolvimentos e pastas (para desenvolvimento) e o app.json são os comportamentos quando rodo em algum ambiente (para o dispositivo).

## tsconfig.json

O TypeScript precisa saber qual runtime JSX você está usando (automático ou clássico). Abra seu tsconfig.json e veja essa parte:

```
{
  "compilerOptions": {
    "jsx": "react-jsx" // ou "react"
  }
}
```

Use "react-jsx" se estiver usando React 17+ com runtime automático (sem precisar importar React).

Use "react" se estiver usando React 16 ou precisar do runtime clássico (precisa importar React).

## Rodar o projeto

`npm run start`

aperta `w | open web`

Pede para instalar o react-dom, react-native-web, expr/metro-runtime dependências necessários. Utilizar o link que mostra no terminal.

Abrir em um novo terminar - powershell e colar o comando

`npx expo install react-dom react-native-web @expo/metro-runtime`

Instalar o @types/estree

`npm install --save-dev @types/estree`

## Expo GO

Ir na loja de aplicativos, play store, e instalar o app do Expo. O nome é Expo GO.

Indo em 'scan QR Code', podemos escanear o qr code grado no npm run start.

Podemos verificar como o aplicativo está ficando no próprio celular.

## Migrar para do Expo para o CLI

Caso seja necessário usar o CLI, se o Expo for limitado para sua aplicação, podemos migrar de Expo para CLI usando o `Expo Prebuild` (o expo eject foi descontinuado em 2025)

https://docs.expo.dev/guides/adopting-prebuild 

Podemos em vez do expo usar o android studio, e o React Native CLI. O Expo pode limitar plugins e bibliotecas de terceiras.

## Instalar o Android Studio

O Android Studio simular um celular (emulador)

https://developer.android.com/develop?hl=pt-br

Obs: Ele é um programa pesado, porém é o mais indicado para desenvolvimento mobile.

Clica em `more actions` > Virtual Device Manager > start

Documentação: https://developer.android.com/studio/gemini/overview?hl=pt-br

Após o `npm run start`, aperta `a` para abrir no android

Caso trave no android studio, clico `r` no terminal do vscode para dar reload

ctrl+c desliga o servidor no terminal

e no celular virtual clica em icon de desligar

## Vysor (emulador)

Outro opção é o espelhar a tela do celular no computador com o Vysor

Transmite a tela do celular para o desktop.

https://www.vysor.io 

Instalar no desktop e no celular

## Criar pasta src no projeto

É uma boa prática criar a pasta src, e codificar os arquivos dentro dela. E os arquivos fora da src são arquivos de configuração.

## Estrutura de pastas (boas práticas)

Criar pasta src na raiz do projeto, dentro criar components e screens.

O screen é um componente que retorna outros componentes. Criar components com primeira letra em maiúscula.

## Criando a screen

Dentro do arquivo da pasta screen, importa o React e o React-Native.

```
import React from "react";
import {Text} from "react-native"
```

exporta uma função default, deixar o nome da função igual do arquivo.tsx. Ex: Arquivo Home.tsx, nome da função Home.

```
export default function Home(){
    return(
        <Text>Home works!!</Text>
    )
}
```

Importa em App.tsx

No React Native podemos utilizar os fragments para envelopar o conteúdo.

`<> </>`

Criar telas em screen e importar em App.tsx, assim passamos a responsabilidade para as telas e deixamos App.tsx limpo.

Podemos deixar cada arquivo do screens dentro de uma pasta específica. Ex: Home > Home.tsx e Style.tsx

## Separar a estilização

Criar dentro de screens, o arquivo Style.tsx. Colocar as folhas de estilos nesse arquivo e importar onde for necessário.

Importar a Stylesheet do react native.

```

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default styles;
```

## Observações

.expo 

A pasta .expo é as configurações que seu aplicativo terá quando rodar no expo. Ir no readme dentro na pasta para saber mais. Não irei utilizar muito.

Assets 

ficam todas as imagens

--

Instalar extensão R Component 

Ele cria a estrutura com base em palavras digitadas:

Snippet	Content (ver na extensão)

* rnbc →	Create a new React Native Basic Component 
* rnso →	Create a new React Native Stylesheet Component
* rnsc →	Create a new React Native Component with Styled Component
* rnscs →	Create a new Styled Component File
* rnsctc →	Get the path to color theme props
* rnsctf →	Get the path to fonts theme props
* nbc →	Create Native Base Component

rnbc cria a estrutura do component padrão e rnso a folha de estilo.

