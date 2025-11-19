import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let quantify:number = 12;

  const removeNumber = () => {
    quantify = quantify -1
    console.log(quantify)
  }

  const addNumber = () => {
    quantify = quantify +1
    console.log(quantify)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={removeNumber}/>
        <Text style={styles.textLabel}>{quantify}</Text>
        <Button title="+" onPress={addNumber}/>
      </View>
      <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel:{
    fontSize: 22,
    marginHorizontal: 15,
  },
  buttonRow: {
    flexDirection: "row",
  }
});
