import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export default function HomeScreen({navigation}:HomeScreenProps){
    const [inputText, setInputText] = useState("");

    const navigateToUserScreen = ()=>{
        //navegar para o UserScreen
        navigation.navigate("User", {username: inputText})
    }

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