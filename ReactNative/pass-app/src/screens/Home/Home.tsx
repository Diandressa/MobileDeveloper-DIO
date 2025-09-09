import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Styles"
import { Logo } from "../../components/Logo/Logo";
import background from '../../../assets/background-1.png'
import { TextInputApp } from "../../components/TextInputApp/TextInputApp";

export default function Home(){
    return(
        <ImageBackground source={background} style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View>
                <TextInputApp></TextInputApp>
            </View>
            
            <Text style={{backgroundColor: '#d4d3c4', padding: 5}}>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </ImageBackground>
    )
}
  