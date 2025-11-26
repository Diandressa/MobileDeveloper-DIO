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
