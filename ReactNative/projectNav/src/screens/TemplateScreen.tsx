import { View,Text, ImageBackground } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import elementImg from '../../assets/elementImg.png'

interface TemplateScreenProps {
    children: React.ReactNode;
}

export function TemplateScreen({children}:TemplateScreenProps){
    return(
        <ImageBackground source={elementImg} style={globalStyles.container}>
            {children}
        </ImageBackground>
    )
}