# Context

Podemos passar propriedades através do método de passar propriedades pela rota, e pelo método do Contexto

Método de Passagem de Props

Esse método fica mais complexo e pouco prático.

[Método Passagem de Props](/RN_Context/met-props.png)

Método via contexto

Criamos um contexto, que é um 'espaço em comum' onde guardamos dados e podemos acessa-los depois. Ele não é passado e acessado de um componente para o outro, ele é uma 'espaço aberto' que podemos acessar os dados. Podemos ter vários Contextos diferentes. Os componentes conseguem ler o conteúdo dentro do contexto, por quer ele fornece o provider/provedor, ele controla quem acessa o contexto.

[Método via contexto](/RN_Context/met-context.png)

## Criar o context

Criamos uma pasta dentro de src chamada context, onde ficaram todos os contexts. Lá criamos o arquivo do Contexto, UserContext.tsx

No arquivo, importamos do React (Parte lógica importa React, e Visual do ReactNative) o createContext:

`import { createContext } from "react";`

Usar ele, definimos como valor inicial um objeto vazio:

`const UserContext = createContext({})`

Criamos o contexto, usamos export para exportar para outros arquivos conseguirem importar

`export const UserContext = createContext({})`

## Criar o provider 

Criamos o provider no arquivo do contexto. 

Cria função do provider, ele recebe o component que está o chamando. Vamos injetar a informação/parâmetro nesse component.

```
function UserContextProvider({children} : any){
    const contextValue = {nome: "Andressa"}
}
```

Definimos um valor para o context, o contextValue.

Abrimos o return para inserir o component <UserContextProvider>. Passamos o valor que desejamos. Dentro do component colocamos o children. Injetamos o valor no children (component passado na props, o component que chamou o context). Não esquecer o export para exportar.

Passamos para o children o value (retornamos para o children), Podemos passar assim as props para os componentes.

```
export default function UserContextProvider({children} : any){
    const contextValue = {nome: "Andressa"}
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}
```



