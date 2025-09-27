import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, {useState, useEffect, useReducer} from 'react';

const reducer = (state: {counter:number}, action: {type:string}) => {
  switch(action.type){
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'cancel':
      return {
        counter: 0
      }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  const incrementCount = () => {
    dispatch({type: 'increment'})
  }

  const decrementCount = () => {
    dispatch({type: 'decrement'})
  }

  const cancelCount = () => {
    dispatch({type: 'cancel'})
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.big}>{state.counter}</Text>
      
      <View style={styles.inline}>
        <Button title='REMOVER' onPress={decrementCount}></Button>
        <Button title='ADICIONAR' onPress={incrementCount}></Button>
        <Button title='Zerar' onPress={cancelCount}></Button>
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
