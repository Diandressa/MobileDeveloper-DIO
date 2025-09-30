# Hooks React

## O que são Hooks

Podemos acessar a documentação pelo site do React: https://react.dev/reference/react/hooks 

Hook significa gancho. Significa enlaçar ou entretecer coisas uma na outra. 

Ele faz uma ação quando algo muda no componente. Ele está entrelaçado com essa mudança.

Os mais usados são: State Hook e o Effect Hook.

Para alterar components na tela temos que usar Hook.

Precisamos importar o Hook do React.

## useState

Gerencia os estados do meu component

## useEffect

Gerencia os efeitos colaterais no meu component. Quando minha tela ou component é alterado eu posso ter uma ação, como dar alertas a partir de alguma validação.

Monitorar/Vigiar variáveis 

Dentro do useEffect eu posso passar uma função. Depois da vírgula passa quem ele vai monitorar, se aquele component mudar ele executa a ação:

```
const [count, setCount] = useState(0);

useEffect(() => {
    Alert.alert("Carrinho", "Seu carrinho está vazio")
  }, [count])
```

Toda vez que o count mudar ele chama o alert.

Fazer a verificação no count:

```
useEffect(() => {
    if(count == 0){
        Alert.alert("Carrinho", "Seu carrinho está vazio")
    }
}, [count])
```

Se eu não passar nenhuma variável para o useEffect monitorar ele dispara sempre que houver atualização na tela

```
 useEffect(() => {
    Alert.alert("Houve atualização na tela")
})
```

## UseReducer

Parecido com useState, mas guiado a eventos.

Para função a convenção é nomear como 'dispatch' (despacha eventos, manda eventos)

`const [state, dispatch] = useReducer()`

Passamos uma função que escuta nosso reducer (const reducer)

```
const reducer = (state, action) = {

}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {counter: 0})
}
```

Passo valor inicial (counter: 0) depois de passar a função como parâmetro no reducer. 

Em vez de chamar o set como no useState, chamamos o dispatch

```
const incrementCount = () => {
    dispatch({})
}
```
Estou despachando um evento chamado increment

`dispatch({type: 'increment'})`

o state é o estado atual, o action é ação sobre esse estado.

switch(action.type) : Se a ação for do tipo x faça algo
counter: state.counter + 1 : counter definido no useReduce recebe um novo estado

```
const reducer = (state: {counter:number}, action: {type:string}) => {
  switch(action.type){
    case 'increment':
      return {
        counter: state.counter + 1
      }
      default:
      return state
  }
}
```

Passo a passo:

state.task

Essa é a lista de tarefas atual. Exemplo:

```
state.task = [
  { name: 'Comprar pão', isDone: false },
  { name: 'Estudar React', isDone: true }
]
```

...state.task

Esse ... é o spread operator.

Ele "espalha" todos os itens do array antigo em um novo array.

Ou seja, cria uma cópia de todos os elementos da lista atual, sem modificar o array original.

`{ name: action.inputValue, isDone: false }`

Esse é o novo item que você quer adicionar à lista.

name recebe o valor que o usuário digitou (action.inputValue).

isDone começa como false porque a tarefa ainda não foi concluída.

O que [...state.task, { name: action.inputValue, isDone: false }] faz

Cria um novo array que tem:

Todos os elementos antigos (...state.task)

o novo objeto da tarefa.

Exemplo prático:
```
state.task = [{ name: 'Comprar pão', isDone: false }]
action.inputValue = 'Estudar React'

task: [...state.task, { name: action.inputValue, isDone: false }]
```
// Resultado:
```
[
  { name: 'Comprar pão', isDone: false },
  { name: 'Estudar React', isDone: false }
]
```