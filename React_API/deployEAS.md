# Logar

Logar em https://expo.dev/accounts/

# EAS Build

Ir na documentação: https://docs.expo.dev/eas/

Clicar em EAS Build > Create your first build

Instalar o EAS CLI:

`npm install -g eas-cli`

Obs: a aplicação não deve estar rodando

Logar no terminal:

`eas login`

Rodar a build para Android:

`eas build --platform android`

Obs: Se eu estiver no Windows ou Linux ele gera para android, para IOS só consigo gerar utilizando sistema do Mac

# EAS Update

## AAB
No site do EAS no navegador, ao lado do botão download, clica em 3 pontinhos e "Submit to an the app store", clicar em EAS Submit para ir para documentação para enviar o app para play store.

## APK

Digitar apk na barra de busca

Ir em: Build APKs for Android Emulators and devices

Em em eas.json, em preview:

```
"preview": {
    "distribution": "internal",
    "android": {
    "buildType": "apk"
    }
},
```

Entrar na pasta do projeto

Rodar o build

Rodar no terminal a build nesse profile, no preview:

    O profile é um bloco de configurações no eas.json, como o preview, o development, o production

`eas build -p android --profile preview`

    É gerado o QRCode e o link para instalar a apk.

## Atualizar cli se necessário

`npm install -g eas-cli`

## Atualizar o APP

Ir em app.json > expo > version

Atualizar para próxima versão

`"version": "1.0.1",`

Alterar a aplicação.

Ir no site EAS, pesquisar "Add custom native code"