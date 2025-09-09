import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Styles"
import { Logo } from "../../components/Logo/Logo";
import background from '../../../assets/background-1.png'
import { TextInputApp } from "../../components/TextInputApp/TextInputApp";
import { ButtonApp } from "../../components/ButtonApp/ButtonApp";

export default function Home(){
    return(
        <ImageBackground source={background} style={styles.appContainer}>
            <View style={styles.overlay} />

            {/* <Text style={{backgroundColor: '#d4d3c4', padding: 5, fontSize: 15, marginBottom: 30}}>Generate a secure password</Text> */}

            <View style={styles.logoContainer}>
                <Logo/>

                <View style={styles.inputContainer}>
                    <TextInputApp/>
                    <ButtonApp/>
                </View>

            </View>
            <StatusBar style="light" />

        </ImageBackground>
    )
}
  