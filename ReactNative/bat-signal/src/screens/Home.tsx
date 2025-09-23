import { View, Text, Image, Button } from "react-native";
import styles from "./StyleHome";
import batSignal from "../../assets/Bat-Signal.png"
import { useState } from "react";

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

                <Button
                title="Activate Bat Signal"
                color="#354D7E"
                accessibilityLabel="Activate Bat Signal"
                onPress={handlerActivate}
                ></Button>
            </View>

            <View style={!isActive ? styles.containerFlex : styles.containerNone}>
                <Text>
                    Formulário
                </Text>

                <Button
                title="Back"
                color="#354D7E"
                accessibilityLabel="Back to Activate Bat Signal"
                onPress={handlerActivate}
                ></Button>
            </View>
            
        </View>
    )
}