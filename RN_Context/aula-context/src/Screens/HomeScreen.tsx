import { useState ,useContext} from "react";
import { UserContext } from "../contexts/userContext";

import { View, Text, TextInput, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">;
}

export default function HomeScreen({navigation}:HomeScreenProps){
    const [inputText, setInputText] = useState("");
    const userContext = useContext(UserContext)

    const navigateToUserScreen = ()=>{
        //navegar para o UserScreen
        navigation.navigate("User", {username: inputText})
        userContext?.save(inputText)
    }

    return(
        <View>
            <TextInput 
                placeholder="Digite seu nome..."
                value={inputText}
                onChangeText={(text)=>setInputText(text)} //a cada atualização de texto ele envia o valor para o setInputText atualizar o inputText
            />
            <Button title="Logar" onPress={navigateToUserScreen} />
        </View>
    )
}