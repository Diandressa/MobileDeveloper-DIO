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

## HomeScreen

Criar o input e o state que guarda o valor desse input ao renderizar:

```
export default function HomeScreen(){
    const [inputText, setInputText] = useState("");

    return(
        <View>
            <TextInput 
                placeholder="Digite seu nome..."
                value={inputText}
                onChangeText={(text)=>setInputText} //a cada atualizao de texto ele envia o valor para o setInputText atualizar o inputText
            />
            <Button title="Logar" onPress={navigateToUserScreen} />
        </View>
    )
}
```

Criar a função navigateToUserScreen para acessar a página Screen

```
const navigateToUserScreen = ()=>{
    //navegar para o UserScreen
}
```

Importar o NavigationProp:

`import { StackNavigationProp } from "@react-navigation/stack";`

Com o NavigationProp podemos passar propriedades pela navegação entre telas. Como estamos usando o stack então importamos o StackNavigationProp.

Importa a lista de typos do App.tsx

`import { RootStackParamList } from "../../App";`

Definir agora a tipagem das propriedades da tela Home (fora do export):

O navigation vai ser um StackNavigationProp com o tipo RootStackParamList, pegando o item Home dessa list

```
type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">;
}
```

Passa essa a prop com a tipagem HomeScreenProps para o export HomeScreen:

`export default function HomeScreen({navigation}:HomeScreenProps){`

Agora na função navigateToUserScreen(), podemos passar a prop com a tipagem para UserScreen:

Primeiro usamos o navigate() e passamos para o User do RootStackParamlist o parâmetro

```
navigation.navigate("User", )
```

Passamos como parâmetro o inputText (do useState) para a propriedade username definida no RootStackParamlist > User
```
const navigateToUserScreen = ()=>{
    //navegar para o UserScreen
    navigation.navigate("User", {username: inputText})
}
```

