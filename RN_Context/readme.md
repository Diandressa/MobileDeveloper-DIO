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
## Prover os dados para os componentes

Importa o provide no App.tsx

`import UserContextProvider from './src/contexts/userContext';`

Usa ele como componente que engloba os outros, tudo dentro desse provide irá ter acesso as propriedades dele (propriedades criadas no context)

```
const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigator>

          <Screen name="Home" component={HomeScreen}/>
          <Screen name="User" component={UserScreen}/>

        </Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}
```

Agora podemos consumir esses dados em uma página.

## Usando um Contexto

Como usar os dados nos componentes abraçados pelo UserContextProvider:

Podemos usar um hook nativo no react chamado useContext, importamos ele primeiro no UserScreen.tsx

`import { useContext } from "react";`

Usamos na tela:

`const UserContextValue = useContext()`

..

```
export default function UserScreen({route}:UserScreenProps){
    const {username} = route.params;
    const UserContextValue = useContext()

    return(
        <View>
            <Text>Bem vindo: {username}</Text>
        </View>
    )
}
```

Precisamos passar o contexto pra função (não o Provide).

O contexto é esse definido UserContext.tsx:

`export const UserContext = createContext({})`

Então fica assim na função:

`const UserContextValue = useContext(UserContext)`

Não esquecer de importar o UserContext tb.

Agora criamos uma constante para extrai o value lá de dentro do contexto. Resgatamos a propriedade nome.

`const nome = UserContextValue.nome;`

Dá erro na tipagem de nome. Precisamos tipar o contexto.

## Tipando os contextos

No UserContext.tsx

```
//tipagem

interface UserContextProps {
    nome: string;
}
```

No Contexto, o tipo pode ser undefined ou UserContextProps, iniciamos ele como undefined:

```
export const UserContext = createContext<UserContextProps | undefined>(undefined)
```

No UserScreen usamos a interrogação para dizer que pode ou não receber um parâmetro:

`const nome = UserContextValue?.nome;`

Também podemos deixar um valor padrão se não receber nenhum parâmetro:

`const nome = UserContextValue?.nome || "Nenhum nome salvo";`

Usando o parâmetro em UserScreen:

```
return(
    <View>
        <Text>Bem vindo: {username}</Text>
        <Text>Bem vindo: {nome}</Text>
    </View>
)
```

## Criando contextos dinâmicos

Pegar o valor do input, salvar no contexto e usar na página UserScreen:

Primeiro criamos o estado, o useState no userContext.tsx

`import { createContext, useState } from "react";`

`const [loginName, setLoginName] = useState<string>("");`

Fazer uma função para setar um user no useState:

```
function saveLoginUserToCache(user:string){
    setLoginName(user)
}
```

Podemos fazer verificação como:

```
function saveLoginUserToCache(user:string){
    if(user !== ""){
        setLoginName(user)
    }
}
```

Tipar o loginName na interface, e a função saveLoginUserToCache:

```
interface UserContextProps {
    nome: string;
    loginName: string;
    save: (user:string) => void
}
```

Agora podemos tipo o ContextValue tb:

`const contextValues:UserContextProps = {nome: "Andressa"};`

Passando os parâmetro que a interface pede:

```
const contextValues:UserContextProps = {
    nome: "Andressa", 
    loginName: loginName, 
    save: saveLoginUserToCache
};
```
Agora o provide esta retornado três coisas: name, loginName, função com setar o valor parra o useState










