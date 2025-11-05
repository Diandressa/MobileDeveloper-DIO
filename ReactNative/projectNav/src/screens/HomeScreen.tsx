import { Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import  homeImg  from '../../assets/homeImg.png'
import { TemplateScreen } from "./TemplateScreen";

export default function HomeScreen(){
    return(
        <TemplateScreen>
            <Image source={homeImg} />
            <Text style={globalStyles.h1}>About me</Text>
            <Text style={globalStyles.text}>My name is Andressa, and I am a front-end web developer. I focus on React and React Native, and I have learned many hard skills along the way. I am committed, dedicated, and work well in a team.</Text>
        </TemplateScreen>
    )
}