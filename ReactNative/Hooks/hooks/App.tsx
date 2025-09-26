import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    //prevstate é o valor passado na função useState(parâmetro)
    setCount((prevState) => prevState + 1)
  }

  const decrementCount = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{count}</Text>
      
      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
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
  }
});
