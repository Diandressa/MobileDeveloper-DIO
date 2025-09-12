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