import {View, TouchableOpacity, Text} from "react-native";
import "./style";
import { styles } from "./style";

export default function BuyButton(){
    return(
       <View style={styles.container}>
            <TouchableOpacity>
                <Text>Favorite This</Text>
            </TouchableOpacity>
       </View> 
    )
}