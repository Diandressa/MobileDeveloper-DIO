import { Text, Image, View } from "react-native";
import { TemplateScreen } from "./TemplateScreen";
import { globalStyles } from "../styles/globalStyles";
import perfil from "../../assets/perfil.jpg"

export default function SkillScreen(){
    return(
        <TemplateScreen>
            <>
                <View style={globalStyles.topContainer}>
                    <Image source={perfil} style={globalStyles.perfil}/>
                    <Text style={globalStyles.perfilText}>Welcome,</Text>
                    <Text style={globalStyles.perfilText}>my name is Andressa.</Text>
                </View>

                <View style={globalStyles.bottomContainer}>
                    <Text>skills work</Text>
                </View>
            </>
        </TemplateScreen>
    )
}