import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Styles"
import { Logo } from "../../components/Logo/Logo";

export default function Home(){
    return(
        <View style={styles.container}>
            <View>
                <Logo/>
            </View>
            
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}
  