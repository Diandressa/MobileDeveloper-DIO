# Hooks no React Native - Gerenciando Components

O React Web importa, no head, o react.developmente.js (motor/core que gerencia o react por debaixo dos panos), e o react-dom-development.js (o react dom gerencia a renderização/ render em aplicações web)

No React Native usamos react.develoment.js (o motor do react), e para renderização usamos o React Native (renderiza em apps mobile). 

Os hooks irão vir dentro do motor do React (react.developmente.js)

## Necessidade de um hook

React Core, responsável pela parte lógica:

* funções
* variáveis 
* source (código fonte)

React Native ou web, responsável pela view:

* renderização

O React Core passa a lógica para o React Native renderizar uma única vez. Para atualizar a aplicação precisamos utilizar os Hooks (Ganchos)

## Documentação 

A mesma do react: https://react.dev/reference/react/hooks 

## useState

Preciso importar o hook

`import React, {useState} from 'react';`

useState altera o estado, ou seja, se o estado for alterado ele irá renderizar. Passamos uma função que é chamado quando o estado muda.

`const [quantity, setQuantity] = useState<number>(12);`

```
const removeNumber = () => {
    setQuantify(quantity - 1);
    console.log(quantity)
}

const addNumber = () => {
    setQuantify(quantity + 1);
    console.log(quantity)
}
```

Ele da o console.log antes de renderizar. Não espera o setQuantity acontecer para imprimir. Por isso colocamos o console.log dentro do setQuantity.

O prevQuantity é o valor da variável do hook, o quantity.

Preciso retornar a nova quantidade 

```
const removeNumber = () => {
    setQuantity((prevQuantity)=>{
      const newQuantity = prevQuantity -1;
      console.log(newQuantity);
      return newQuantity
    });
  }
```

Isso ajusta, deixa síncrono. Uma função executa após a outra na mesma chamada de função.

## UseEffect

Executa um efeito colateral quando ocorre uma modificação no elemento vigiado. Ele é uma funcão:

```
useEffect(()=>{

})
```

Depois da vírgula coloca a lista de elementos que serão vigiados, colocar a função depois da criação da variável:

```
useEffect(()=>{
  console.log("Algo foi alterado")
}, [quantity])
```

Agora, quando quantity tiver o valor alterado o useEffect vai ser executado.

Se não passar a lista do elemento a ser alterado, ele executa a ação do useEffect assim que a aplicação inicia:

```
useEffect(()=>{
  console.log("Efeito colateral executado, app iniciado")
}, [])
```

## useRef

Usamos o useRed como os seletores do JS, como o querySelect ou getElementyById, para selecionar o elemento que desejamos alterar. Guardo a referência do elemento usando o useRef.

O useRef precisa de um valor inicial, no exemplo passamos null.

```
const textInputRef = useRef<TextInput>(null);
```

O <TextInput> é a tipagem do elemento que estamos selecionando

No elemento colocamos o ref:

```
<TextInput ref={textInputRef} style={styles.textInput}>
```

Verificamos se existe o elemento, o current é o elemento atual (corrente):

```
const resetButton = () => {
  if(textInputRef.current){

  }
}
```

Usamos o *setNativeProps* para manipular a propriedade do elemento, queremos manipular a propriedade text:

```
const resetButton = () => {
  if(textInputRef.current){
    textInputRef.current.focus();
    textInputRef.current.setNativeProps({text: "reset"});
  }
}
```

Funciona na primeira Renderização.

Para renderizar o conteúdo a cada mudança podemos usar o useState

```
const [text, setText] = useState("");
const textInputRef = useRef<TextInput>(null);

const resetButton = () => {
  setText("");            // limpa o conteúdo
  textInputRef.current?.focus(); // coloca o cursor no input
};

```

Elemento:

```
<View style={styles.container}>
  <TextInput onChangeText={setText} ref={textInputRef} style={styles.textInput} value={text}>
    
  </TextInput>
  <Button title='Resetar' onPress={resetButton}/>
</View>
```

Chama o onChangeText para atualizar o valor do useSate, set o valor digitado para o estado. Ao apertar no btn resetar ele chama a função resetButton. Aplica o setText como branco e focu o input, e renderiza isso na tela a cada clique

## useReducer

Mais complexo, quando precisamos alterar um component de diferentes maneiras e funções.

Passa o estado inicial

`const [state, dispatch] = useReducer(useReducer, initialState)`

Declarando o estado inicial

```
 const initialState = {
    textInputRef: useRef<TextInput>(null);
  }
```
Cria a função do reducer que vai gerenciar os estados do component (fora do export default App). A função vai receber, como parâmetro o estado e a ação que quero executar:

`const reducer = (state, action) => {}`

Podemos usar o switch case para organizar as funções

```
const reducer = (state:any, action:any) => {
  switch (action.type){

  }
}
```

Definir os tipos de ações em uma const, como objeto

```
const ActionsTypes = {
  RESET: "RESET",
}
```

Na função de gerenciamento podemos definir a função caso chame o RESET

```
const reducer = (state, action) => {
  switch (action.type){
    case ActionsTypes.RESET:

      state.textInputRef.current?.focus(); // interrogação: chama o focus() se não for null ou undefined
      state.current.setNativeProps({text: ""})    
      return state
    
  }
}
```

Chama o RESET no component, com a função dispatch do reducer:

```
<Button title='Resetar' onPress={()=>dispatch({type: ActionsTypes.RESET})}/>
```

No componente, usa o state para acessar o textInputRef agora

`<TextInput ref={state.textInputRef} style={styles.textInput}>`


