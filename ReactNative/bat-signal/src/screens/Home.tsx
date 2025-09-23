import { View, TextInput, Text, Image, ImageBackground, StyleSheet } from "react-native";
import styles from "./StyleHome";
import batSignal from "../../assets/Bat-Signal.png"
import logoBatSignal from "../../assets/logo-bat-signal.png"
import wallpaper from "../../assets/wallpaper.jpg"
import { useState } from "react";
import { ButtonApp } from "../components/ButtonApp/ButtonApp";

export default function Home (){
    const [isActive, setIsActive] = useState(true)

    function handlerActivate(){
        setIsActive((oldValue: boolean) => {return !oldValue})
    }
    return(
        <ImageBackground source={wallpaper} style={styles.containerBackground}>
            <View style={styles.overlay} />
            {isActive ? (
            <View style={styles.container}>
                <Image
                source={batSignal}
                style={{ resizeMode: 'contain', width: 200 }}
                ></Image>

                <ButtonApp title={"Activate Bat Signal"} label={"Activate Bat Signal"} handlerActivate={handlerActivate}/>
            </View>
            ) : ( 
            <View style={styles.container}>
                <Image
                source={logoBatSignal}
                style={{resizeMode: "contain", width: 100, height: 100, alignSelf: "flex-start"}}
                />

                <TextInput placeholder="Text" style={styles.InputStyle}/>

                <Text style={styles.InputLabel}>Label</Text>
                <TextInput placeholder="Text" style={styles.InputStyle}/>

                <Text style={styles.InputLabel}>This is ypur text</Text>
                <TextInput 
                placeholder="Your text here..."
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                style={[styles.InputStyle, {height: 100, textAlignVertical: 'top'}]}
                />

                <Text style={styles.InputLabel}>Label</Text>
                <TextInput 
                placeholder="Your text here..."
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                style={[styles.InputStyle, {height: 100, textAlignVertical: 'top'}]}
                />

                <ButtonApp title={"Send"} label={"Back to Activate Bat Signal"} handlerActivate={handlerActivate}/>
            </View>)}      
            
        </ImageBackground>
    )
}