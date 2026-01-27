import { View,Text, ImageBackground } from "react-native"
import { styles } from "./style"
import CardView from "../../components/CardView"
import imagem from "../../../assets/fundo.png"

export default function DrawerScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.cameraBox}>
                <View style={styles.trianguloCorner}></View>
                <View style={[styles.trianguloCorner, styles.topRight]}></View>
                <View style={[styles.trianguloCorner, styles.bottomLeft]}></View>
                <View style={[styles.trianguloCorner, styles.bottomRight]}></View>
                 <CardView/>
            </View>
        </View>
    )
}