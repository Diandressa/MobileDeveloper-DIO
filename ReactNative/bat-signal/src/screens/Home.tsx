import { View, Text, Image, Button } from "react-native";
import styles from "./StyleHome";
import batSignal from "../../assets/Bat-Signal.png"
import { useState } from "react";
import { ButtonApp } from "../components/ButtonApp/ButtonApp";

export default function Home (){
    const [isActive, setIsActive] = useState(true)

    function handlerActivate(){
        setIsActive((oldValue: boolean) => {return !oldValue})
        console.log(isActive)
    }
    return(
        <View style={styles.container}>
            <View style={isActive ? styles.containerFlex : styles.containerNone}>
                <Image
                source={batSignal}
                style={{ resizeMode: 'contain', width: 200 }}
                ></Image>

                <ButtonApp title={"Activate Bat Signal"} label={"Activate Bat Signal"} handlerActivate={handlerActivate}/>
            </View>

            <View style={!isActive ? styles.containerFlex : styles.containerNone}>
                <Text>
                    Formulário
                </Text>

                <ButtonApp title={"Back"} label={"Back to Activate Bat Signal"} handlerActivate={handlerActivate}/>
            </View>
            
        </View>
    )
}