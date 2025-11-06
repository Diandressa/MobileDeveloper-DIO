import { Text, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import  homeImg  from '../../assets/homeImg.png'
import { TemplateScreen } from "./TemplateScreen";

export default function HomeScreen(){
    return(
        <TemplateScreen>
            <Image source={homeImg} style={{width: '50%', resizeMode: 'contain'}}/>
            <Text style={globalStyles.h1}>About me</Text>
            <Text style={globalStyles.text}>I'm Andressa, a front-end developer focused on React and React Native. I'm dedicated, collaborative, and always improving my skills.</Text>
        </TemplateScreen>
    )
}