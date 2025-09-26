import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [countIcon, setCountIcon] = useState('');

  useEffect(() => {
    if(count == 0){
      Alert.alert("Carrinho", "Seu carrinho está vazio")
    } else {
      console.log("Ainda tem itens")
    }
  }, [count])

  const incrementCount = () => {
    //prevstate é o valor passado na função useState(parâmetro)
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    if (count > 0){
      setCount((prevState) => prevState - 1)
    }
  }

  const incrementIcon = () => {
    if(countIcon){
      setCountIcon('')
    } else {
      setCountIcon('❤')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}{countIcon}</Text>
      
      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
        <Button title='FAVORITAR ❤' onPress={incrementIcon}></Button>
      </View>
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
  big: {
    fontSize: 40,
  },
  inline: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  }
});
