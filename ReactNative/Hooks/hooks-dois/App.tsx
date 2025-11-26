import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(10.90);
  const basePrice = 10.9;

  useEffect(()=>{
    console.log("Efeito colateral executado, app iniciado")
  }, [])

  const removeNumber = () => {
    setQuantity((prevQuantity)=>{

      const newQuantity = prevQuantity -1;
      console.log(newQuantity);

      setPrice(basePrice * newQuantity)

      return newQuantity
    });
  }

  const addNumber = () => {
    setQuantity((prevQuantity)=>{
      const newQuantity = prevQuantity +1;
      console.log(newQuantity);

      setPrice(basePrice * newQuantity)

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

      <Text>{price}</Text>

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
