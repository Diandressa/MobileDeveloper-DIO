import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, useReducer} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const ActionsTypes = {
  RESET: "RESET",
  WRITE: "WRITE",
}

const reducer = (state:any, action:any) => {
  switch (action.type){

    case ActionsTypes.RESET:
      
      state.textInputRef.current?.focus(); // interrogação: chama o focus() se não for null ou undefined
      state.textInputRef.current.setNativeProps({text: ""})
      return state

    case ActionsTypes.WRITE:
       state.textInputRef.current.setNativeProps({text: "Inserir Texto"})
       return state
  }
}

export default function App() {
  const initialState = {
    textInputRef: useRef<TextInput>(null),
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View style={styles.container}>
      <TextInput ref={state.textInputRef} style={styles.textInput}>
        
      </TextInput>
      <Button title='Resetar' onPress={()=>dispatch({type: ActionsTypes.RESET})}/>
      <Button title='Escrever' onPress={()=>dispatch({type: ActionsTypes.WRITE})}></Button>
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
  textInput:{
    height: 40,
    borderColor: 'gray',
    paddingTop: 10,
    marginTop: 20,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
