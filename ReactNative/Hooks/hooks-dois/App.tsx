import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const textInputRef = useRef<TextInput>(null);

  const resetButton = () => {
    if(textInputRef.current){
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({text: "reset"});
    }
  }

  return (
    <View style={styles.container}>
      <TextInput ref={textInputRef} style={styles.textInput}>
        
      </TextInput>
      <Button title='Resetar' onPress={resetButton}/>
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
