# Cria o projeto

`npx create-expo-app aula-context -t`

Blank (Typescript)

## Cria pasta scr/screen/HomeScreen.tsx

```
import { View, Text } from "react-native";

export default function HomeScreen(){
    return(
        <View>
            <Text>Works!</Text>
        </View>
    )
}
```

Importa no App.tsx:

`import HomeScreen from './src/Screens/HomeScreen';`

## Instalar o React Navigation:

Entra na pasta do projeto, no terminal:

`npm install @react-navigation/native`
`npx expo install react-native-screens react-native-safe-area-context`

Depois Instala o tipo de Navegação:

`npm install @react-navigation/stack`

# Cria a Navegação

Importa o NavigationContainer no App.tsx

`import { NavigationContainer } from '@react-navigation/native';`

Importa o stack Navigator:

`import { createStackNavigator } from '@react-navigation/stack';`

Cria constante para armazenar a função createStackNavigator (antes do export), e extrai o Navigator e Screen da função:

`const {Navigator, Screen} = createStackNavigator();`

Usa o <NavigationContainer> no return(), e dentro dele o Navigator e o Screen

```
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>

        <Stack name="Home" component={HomeScreen}/>
        <Stack name="User" component={UserScreen}/>

      </Navigator>
    </NavigationContainer>
  );
}
```

Coloca o nome da screen e qual component ela irá apontar:

`<Screen name="Home" component={HomeScreen}/>`

Precisamos passar um parâmetro que tanto o HomeScreen tanto o UserScreen terá acesso, o UserName:string

## Criar tipagem para esses parâmetros

```
export type RootStackParamList = {
  Home: undefined;
  User: 
    {
      username:string
    }
}
```

Posso passar esse tipo quando cria a navegação

`const {Navigator, Screen} = createStackNavigator<RootStackParamList>();`