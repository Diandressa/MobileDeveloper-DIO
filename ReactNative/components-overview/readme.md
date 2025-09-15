# Trabalhando com Components no React Native

## Sobre eventos de gestos

Os gestos/gesture são as interações do usuário na tela

## Texto Selecionável

Consigo criar um texto selecionável com o selectable no component <Text>

```
<Text
selectable={true}
>
    Hello!
</Text>
```

## Compondo texto

O primeiro os textos ficam na mesma linha (concatenando os textos). Colocando dentro da View os textos quebram, e cad um ficam em uma linha diferente

```
<Text>
    <Text>Ola</Text>
    <Text>Mundo</Text>
</Text>

<View>
    <Text>Ola</Text>
    <Text>Mundo</Text>
</View>
```

## Array de Styles

Posso passar vários styles utilizando arrays

`<Text style={[styles.texto, styles.border]}>OnTouch</Text>`

Posso compor com um style inline também

`<View style={[styles.container, {backgroundColor: 'pink'}]}>`

Os estilos passados por último sobrescreve os primeiros

## Imagens e pontos assets

Podemos importar uma imagem direto da memória com require (importar local). Para isso copiamos o caminho da imagem e ajustamos as barras que estão invertidas.

```
<Image
    source={require('C:/UsersCaminho/MobileDeveloper-DIO/ReactNative/components-overview/assets/chihiro.jpg')}
/>
```

Porém, para não deixar exposto o caminho da máquina podemos importar a imagem no projeto com import. Não esquecer de declarar o tipo png no arquivo declarations.d.ts na raiz do projeto (declare module '*.png').

`import imgChihiro from './assets/chihiro.png'`

Não precisamos do required pois não vamos importar a imagem direto da memória

```
 <Image
    source={imgChihiro}
/>
```

## TextInput

KeyboardType abre o teclado número ao clica no input

```
<TextInput
style={styles.input}
onChange={()=>{console.log('add texto')}}
keyboardType='numeric'
/>

```

## Capturando Event

Usamos o nativeEvent para capturar o evento do input

`
onChange={(event)=>{console.log(event.nativeEvent.text)}}
`

## Button - Capturando valores com useState

Importa button e useState

```
import { Image, Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, {useState} from 'react';
```

Declara a constante do useState antes do return

`const [usuario, setUsuario] = useState('');`

Usa o useState para manipula a contante e depois imprimir no alert do botão

```
<TextInput
style={styles.input}
onChange={(text)=>{setUsuario(text.nativeEvent.text)}}
keyboardType='default'
placeholder='digite seu numero'
value={usuario}
/>

<Button
title='Click aqui'
onPress={()=>{Alert.alert('Valor atual: ', usuario)}}
/>
```

## ScrollView

ScrollView permite rolar a tela, ele é um component, como a View, mas que permite a rolagem.

`<ScrollView>`

## Switch

O Toggle Switch (botão de alternância), permite alternar entre dois estados, geralmente "ligado/desligado" ou "ativado/desativado"

`<Switch></Switch>`

Após importar o Switch, criamos o useState que irá renderizar o estado dele e a função que inverte o valor com o negação !

```
const [ligado, setLigado] = useState(false);

function handleSwitch(){
setLigado(!ligado)
}
```

Usa o onChangeValue (quando o value mudar de valor) e passa a função que chama o useState para renderizar e defini o valor que está no useSate

```
<Switch 
value={ligado} 
onValueChange={handleSwitch}
/>
```