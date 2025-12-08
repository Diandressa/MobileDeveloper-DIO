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

`npm install @react-navigation/native `
`npx expo install react-native-screens react-native-safe-area-context`

Depois Instala o tipo de Navegação:

`npm install @react-navigation/stack    `