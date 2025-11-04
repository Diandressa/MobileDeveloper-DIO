import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import  homeImg  from '../../assets/homeImg.png'

export default function HomeScreen(){
    return(
        <View style={globalStyles.container}>
            <Image source={homeImg} />
            <Text style={globalStyles.h1}>Curriculum</Text>
            <Text>Sobre mim texto</Text>
        </View>
    )
}