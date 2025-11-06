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

![Passo a Passo - Como customizar minha Bottom Tab Bar?](https://www.youtube.com/watch?v=8C9Un37K-jI)

### Criando as Rotas em abas

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

## Ícones Expo

Usar o vector-icons: https://docs.expo.dev/guides/icons/

Ele já venho com o Expo, só precisamos importar. Importa no bottom-tabs.routes.tsx. Dependendo do Icone ele importa de outras bibliotecas. É recomendado usar a mesma lib no projeto, podemos filtrar por pacote no [expo vector](https://icons.expo.fyi/Index).

`import Ionicons from '@expo/vector-icons/Ionicons';`

Instalar o pacote se não vier instalado no expo:

`npx expo install @expo/vector-icons`

Podemos pegar um ícone da galeria: https://icons.expo.fyi/Index

Usamos o option no arquivo bottom-tabs.routes.tsx para personalizar, para estilizar o ícone usamos o tabBarIcon:

```
<Screen 
    name='home' 
    component={HomeScreen}
    options={{
        tabBarIcon: 
    }}
/>
```

Passamos valores como uma função. Os parâmetros são os valores que queremos alterar.

```
options={{
    tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons
            name='home'
        >
        </MaterialCommunityIcons>
    ),
}}
```

O name é o nome do ícone, podemos encontrar na lib [icons.expo.fyi](https://icons.expo.fyi/Index) ou control+enter.

Alterar a cor e o tamanho, deixamos o size padrão:

```
<MaterialCommunityIcons
    name='home'
    color='red'
    size={size}
>
</MaterialCommunityIcons>
```

## Mudar title da tab com option

```
options={{
    title: 'Main',
    tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons
            name='view-gallery'
            color='blue'
            size={size}
        >
        </MaterialCommunityIcons>
    ),
}}
```

## Trabalhando com Drawer Navigation

### Instalar o Drawer Navigator

https://reactnavigation.org/docs/drawer-navigator

comando:

`npm install @react-navigation/drawer`

Ele precisa de duas dependências, para instalar com o expo:

`npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets`

importar na App.tsx

`import { createDrawerNavigator } from '@react-navigation/drawer';`

### Criando contexto de Rotas de Gaveta

### Versão compatível Expo e Screen

Package.json

```
"@react-navigation/bottom-tabs": "^7.7.3",
    "@react-navigation/native": "^7.1.19",
    "expo": "~54.0.0",
    "expo-status-bar": "~3.0.8",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-safe-area-context": "^5.6.2",
    "react-native-screens": "~4.16.0",
    "react-native-web": "^0.21.0"
```

## BottomTabBar Style

![Passo a Passo - Como customizar minha Bottom Tab Bar?](https://www.youtube.com/watch?v=8C9Un37K-jI)

## SafeAreaView

O SafeAreaView é um componente que impede que o conteúdo da sua tela fique escondido atrás de partes do sistema do celular, como:

* A notch (aquele recorte na parte superior do iPhone)
* A barra de status (onde ficam hora, bateria, etc.)
* A barra de navegação inferior (com os botões do Android)
* As bordas curvas de telas modernas

Ou seja, ele respeita as “áreas seguras” do dispositivo.

🛠️ Como ele funciona

Sem o SafeAreaView, seu conteúdo ocupa toda a tela (flex: 1), podendo ser coberto por partes do sistema.

Com o SafeAreaView, o React Native detecta automaticamente as margens seguras do aparelho e adiciona padding nessas áreas — assim, nada fica escondido.

```
<NavigationContainer>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <BottomTabsRoutes/>
    </SafeAreaView>
</NavigationContainer>
```