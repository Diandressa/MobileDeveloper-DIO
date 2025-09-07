import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Home works!!</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  