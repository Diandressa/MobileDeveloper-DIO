# Navegação do Native

## Criar projeto

`npx create-expo-app react-nav`

Criar pasta src e a pasta screens

## Navegação

Usamos a biblioteca react navigation para navegação entre telas.

https://reactnavigation.org/

`npm install @react-navigation/native`

E instalar as duas bibliotecas que o navigation depende:

`npm install react-native-screens react-native-safe-area-context`

## Rotas - Roteamento

Criar pasta routes, arquivo stack.routes.tsx

Instalar a biblioteca da navegação que desejamos: https://reactnavigation.org/docs/stack-navigator

`npm install @react-navigation/stack`

Importar o navegador do tipo stack

`import { createStackNavigator } from '@react-navigation/stack'`

Extrai da função createStackNavigator() dois componentes, usando desestruturação (js):

`const { Screen, Navigator } = createStackNavigator();`

Screen -> aponta para as telas
Navigator -> permite a navegação

Importar as telas(screens):

```
import { HomeScreen } from '../src/screens/HomeScreen'
import { GallerySreen } from '../src/screens/GallerySreen'
```

Criar o componente com o navigator e screens

```
export function StackRoutes(){
    return(
        <Navigator>
            <Screen />
        </Navigator>
    )
}
```

name -> o apelido da rota
component -> qual o component screen

```
<Navigator>
    <Screen 
        name='home'
        component={HomeScreen}
    />

    <Screen 
        name='gallery'
        component={GallerySreen}
    />
</Navigator>
```


