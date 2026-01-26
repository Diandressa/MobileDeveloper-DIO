# Criar projeto

1 - Cria a pasta do projeto

2 - No terminal:\
`create-expo-app nomeProjeto -t`

3 - Escolher Blade(Typescript)

4 - Criar pasta src 

5 - Dentro de src cria pasta: component, screens, apis

6 - Cria as telas em screens com extensão .tsx

7 - No arquivo de tela:
```
import { View,Text } from "react-native"

export default function DrawerScreen(){
    return(
        <View>
            <Text>Works</Text>
        </View>
    )
}
```

8 - Importa <View> do "react-native"

9 - Em App.tsx importar o component criado

10 - No terminal:\
`npm run start`

# Estilo CSS

1 - Cria pasta na screen com o nome da tela

2 - Coloca index.tsx e style.tsx na pasta

3 - No arquivo style.tsx: \
```
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{

    }
})
```

4 - Importar na index.tsx:
```
<View style={styles.container}>
    <Text>Works</Text>
</View>
```
