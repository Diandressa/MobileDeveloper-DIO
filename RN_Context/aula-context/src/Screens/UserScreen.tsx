import { useContext } from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
    route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen({route}:UserScreenProps){
    const {username} = route.params;

    const userContext = useContext(UserContext)

    const nomeDinamico = userContext?.loginName || "Nenhum nome salvo";
    const nomeEstatico = userContext?.nome || "Nenhum nome salvo"

    return(
        <View>
            <Text style={{fontSize: 32}}>Rota/Navigate recebe de HomeScreen: {username}</Text>
            <Text>Context API - nome Dinâmico: {nomeDinamico}</Text>
            <Text>Context API - nome Estático: {nomeEstatico}</Text>
        </View>
    )
}