import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, {useState, useEffect, useReducer} from 'react';

const listener = (state: any, action: any) => {
  switch(action.type){
    case 'add-new-task':
      return {
        task: [... state.task, {name:action.inputValue , isDone: false}]
      }
    default:
      break;
  }
}

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [state, dispatch] = useReducer(listener, {task: []})

  const handleAddTask=()=>{
    dispatch({type: 'add-new-task', inputValue})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.big}></Text>
      
      <View style={styles.inline}>
        <TextInput 
        style={styles.enter}
        value = {inputValue}
        onChangeText={(text) => setInputValue(text)} >
        </TextInput>
        <Button title='Adicionar tarefa' onPress={handleAddTask}></Button>
      </View>

      {state?.task.map((task: any) => <Text>{task.name}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4939ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enter: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#5450d6',
    width: '80%',
    color: 'white',
  },
  big: {
    fontSize: 40,
  },
  inline: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
