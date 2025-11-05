import { Text, Image, View, ScrollView, FlatList } from "react-native";
import { TemplateScreen } from "./TemplateScreen";
import { globalStyles } from "../styles/globalStyles";
import perfil from "../../assets/perfil.jpg"
import { icons } from "../components/Icons"

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
                    <View style={globalStyles.boxSkills}>
                        <Text style={{marginBottom: 20}}>Skills</Text>
                        <FlatList
                            data={[
                            {key: 'Javascript', image: icons.js},
                            {key: 'HTML/CSS', image: icons.htmlCss},
                            {key: 'React Native', image: icons.reactNative},
                            {key: 'Laravel', image: icons.laravel},
                            {key: 'NodeJS', image: icons.nodejs},
                            {key: 'NPM', image: icons.npm},
                            {key: 'API', image: icons.api},
                            ]}
                            renderItem={({item}) => 
                            <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={item.image} style={{marginRight: 10}}/>
                                <Text style={{fontSize: 20, color: '#666'}}>{item.key}</Text>
                            </View>}
                        />
                    </View>
                </View>
            </>
        </TemplateScreen>
    )
}