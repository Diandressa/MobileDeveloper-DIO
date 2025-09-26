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