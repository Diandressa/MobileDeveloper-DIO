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

