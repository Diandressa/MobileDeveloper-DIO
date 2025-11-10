import { Text, View, Image } from "react-native";
import { TemplateScreen } from "./TemplateScreen";
import { globalStyles } from "../styles/globalStyles";
import perfil from "../../assets/perfil.jpg"
import { Link } from "../components/Link";

export function FollowMeScreen(){
    return(
        <TemplateScreen>

            <>
                <View style={globalStyles.topContainer}>
                    <Image source={perfil} style={globalStyles.perfil}/>
                    <Text style={globalStyles.perfilText}>Welcome,</Text>
                    <Text style={globalStyles.perfilText}>my name is Andressa.</Text>
                </View>

                <View style={[globalStyles.bottomContainer, { gap: 30}]}>
                    <Text style={{textAlign: 'center', fontSize: 20}}>contact me through</Text>
                    <Link url={'https://github.com/Diandressa'} text="Github" name="github"/>
                    <Link url={'https://www.linkedin.com/in/andressa-nicolau'} text="Linkedin" name="linkedin"/>
                    <Link url={'https://andressanicolau.online'} text="Site" name="web"/>
                    <Link url={'mailto:andressa_nicolau@hotmail.com'} text="Email" name="email-fast"/>
                </View>
            </>

        </TemplateScreen>
    )
}