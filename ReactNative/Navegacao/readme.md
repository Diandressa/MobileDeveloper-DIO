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

## Navegação tipo Stack - Roteamento

Criar pasta routes dentro de src, arquivo stack.routes.tsx

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
import HomeScreen from '../screens/HomeScreen'
import GallerySreen from '../screens/GallerySreen'
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

### Container

Contexto de rotas é um tipo de navegação e as telas que ele pode acessar.

O container acessa o navigator

Criar dentro da pasta routes o arquivo index.tsx, importa o NavigationContainer

`import { NavigationContainer } from '@react-navigation/native'`

Importar o arquivo stack.routes.tsx

`import { NavigationContainer } from '@react-navigation/native'`

Criar a função Routes, usar o NavigationContainer

```
//o contexto de rota
import { StackRoutes } from './stack.routes'

//caixa de contextos
export function Routes(){
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
}
```

Passar o container para o App.tsx

Dá o return no NavigationContainer:

```
export function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}
```

No App.tsx importa o index:

`import { Routes } from './src/routes/index'`

ou 

`import { Routes } from './src/routes/'`

Quando o nome é index ele entende sem eu precisar passar no import.

Usar o component Routes:

```
import { Routes } from './src/routes/index'

export default function App() {
  return (
      <Routes/>
  );
}
```

Posso passar o component do **<StatusBar style='auto'/>** na HomeScreen.tsx e na GalleryScreen.tsx

### Botão para navegação - Usando Navigation para trocar de telas

Temos que resgatar o <Navigator> dentro da Screen (ele vem no import do stack.routes.tsx nas screens criadas home e gallery). Resgatamos no parâmetro da função.

Na HomeScreen.tsx e no GalleryScreen.tsx

`export default function HomeScreen( {navigation}:any){}`

Inserimos o Button chamando a função para a rota que queremos:

```
<Button
    title='Go to Gallery'
    onPress={navToGallery}
/>
```

Escrever a função:

```
function navToGallery(){
    navigation.navigate('gallery')
}
```

O navigation é o parâmetro recuperado na função.  O navigate('') encontra a página com base no apelido que damos para a rota, no component Screen. O apelido está em stack.routes.tsx 

```
export function StackRoutes(){
    return(
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
    )
}
```

### Option Screen

Options é uma propriedade da screen para colocar estilos e nome personalizados:

```
export function StackRoutes(){
    return(
        <Navigator>
            <Screen 
                name='home'
                component={HomeScreen}
                options={{
                    title: 'Main menu',
                    headerTintColor: 'blue',
                    headerShown: false,
                }}
            />

            <Screen 
                name='gallery'
                component={GallerySreen}
            />
        </Navigator>
    )
}
```

## Navegação tipo Bottom Tabs - Roteamento

https://reactnavigation.org/docs/bottom-tab-navigator

Comando

`npm install @react-navigation/bottom-tabs`

dentro da pasta Routes, cria o arquivo bottom-tabs.routes.tsx

## Criando as Rotas em abas

No bottom-tabs.routes.tsx:

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GallerySreen';

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name='home' 
                component={HomeScreen}
            />
            <Tab.Screen 
                name='gallery' 
                component={GalleryScreen}
            />
        </Tab.Navigator>
    )
}
```

No index.tsx:

```
import { NavigationContainer } from '@react-navigation/native'

//o contexto de rota
import { BottomTabsRoutes } from './bottom-tabs.routes'

//caixa de contextos
export function Routes(){
    return(
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
}
```

## Desestruturar a função

`const { Navigator, Screen } = createBottomTabNavigator();`

Arrumar no component:

```
<Navigator>
    <Screen 
        name='home' 
        component={HomeScreen}
    />
    <Screen 
        name='gallery' 
        component={GalleryScreen}
    />
</Navigator>
```
