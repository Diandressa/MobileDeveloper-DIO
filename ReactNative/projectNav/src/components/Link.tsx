import { View, Text, Linking, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface LinkProps {
    url: string;
    text: string;
    name: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function Link({text, url, name}: LinkProps){
    return(
        <TouchableOpacity
            style={globalStyles.buttonLink}
            onPress={() => Linking.openURL(url)}
        >
            <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name={name} size={20} style={ {marginRight: 10} }></MaterialCommunityIcons>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}