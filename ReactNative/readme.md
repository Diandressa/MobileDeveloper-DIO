# React Native

## Introdução ao React Native

### O que são nativos e híbridos

Linguagens que são nativas para desenvolver com Android: Kotlin ou Java

Linguagens que são nativas para desenvolver com IOS: Objective-C ou Swift

As linguagens híbridas ferramentas que posso desenvolver independente da plataforma: React Native, Flutter, Xamarin, Ionic, Framework7

Permite o dev se identificar melhor utilizando a ferramenta que ele já trabalha para web.

### Nativos

Vantagens: 

* As novidades chegam primeiro na linguagem nativa (a linguagem fica pronta para lidar com aquilo)
* 100% de aproveitamento do processamento, melhor performance

Quando utilizar o nativo?

Quando o app requer um recurso especifico daquele hardware (Android ou IOS) ou quando preciso de um nível de performance/processamento muito alto.

Desvantagens:

* As linguagens nativas são feitas para aquele ambiente especifico, é necessário fazer dois apps em paralelo, um para o Android e outro para o IOS (com pessoas especialista naquelas linguagens)
* Não tem tantas pessoas desenvolvedoras do swift(IOS), dependo do hardware (Mac)

### Híbridos

Tecnologias cruzadas no ambiente mobile, um desenvolvimento que gera dois apps (Android e IOS)

Desvantagens: 

* Quando chega novidades no Android ou IOS, preciso aguardar sair o pacote/versão para uso nos Híbridos
* Tem mais camadas de conversão para ser executado. (Não tem uma queda de performance tão grande)
* Cada híbrido tem estratégias diferentes para o mobile, cada um funciona diferente do outro.

Vantagens:

* Mais econômico para as empresas.
* Multi-plataforma: Uma pessoa desenvolve tanto para Android quanto para IOS usando somente o híbrido.

Quando utilizar?

Quando não dependo do tanto de novos recursos do hardware.

### React vs React Native

![ReactJS vs React Native](./tldraw/react-vs-reactNative.png)

### Arquitetura React Native

![Architecture React Native](./tldraw/react-native-new-architecture.png)

### React Native Component 

![React Native Component](./tldraw/react-native-jsx.png)

Cada component utilizado precisa ser importado

```
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

O componente quando chega no Android é convertido para linguagem do Android e quando chega no IOS é convertido para IOS.

Os componentes são funções javascript que retornam tags

Conteúdos soltos, sem estar dentro do component o Android não entende, dá erro:

```
<View style={styles.container}>
    <Text>Hello Andressa</Text>
    texto puro
</View>
```

A <View> equivale a <div>

Os componentes devem começar com letra maiúscula.

Igual o React, tudo precisa estar dentro de uma <View>, não posso retornar dois componentes na função

## Component Expo

Além dos componentes que o React Native fornece, também temos os componentes do próprio Expo

## Style Inline

O style é declarado como se fosse uma função javascript, por isso uso chaves.

No inline declaro o objeto dentro da função { {} } , já em linha:

`<Text style={{ color: 'red'}}>Nicolau</Text>`

```
<Text 
    style={{
        color: 'blue', 
        backgroundColor: 'red',
        fontSize: 30
    }}>
Hello Andressa
</Text>
```