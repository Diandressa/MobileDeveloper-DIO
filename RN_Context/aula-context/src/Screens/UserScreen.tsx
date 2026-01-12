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
    const UserContextValue = useContext(UserContext)
    const nome = UserContextValue?.nome || "Nenhum nome salvo";

    return(
        <View>
            <Text style={{fontSize: 32}}>Rota: {username}</Text>
            <Text>Context API: {nome}</Text>
        </View>
    )
}