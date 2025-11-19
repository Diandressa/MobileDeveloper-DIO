import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState<number>(12);

  const removeNumber = () => {
    setQuantity((prevQuantity)=>{
      const newQuantity = prevQuantity -1;
      console.log(newQuantity);
      return newQuantity
    });
  }

  const addNumber = () => {
    setQuantity((prevQuantity)=>{
      const newQuantity = prevQuantity +1;
      console.log(newQuantity);
      return newQuantity
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={removeNumber}/>
        <Text style={styles.textLabel}>{quantity}</Text>
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
