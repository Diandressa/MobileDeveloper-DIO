import { StatusBar } from 'expo-status-bar';
import { Image, Alert, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import imgChihiro from './assets/chihiro.png'
import React, {useState} from 'react';

export default function App() {
  const [usuario, setUsuario] = useState('');
  
  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor: 'pink'}]}>

        <Image
        source={imgChihiro}
        style={{resizeMode:'contain'}}
        />

        <TextInput
        style={styles.input}
        onChange={(text)=>{setUsuario(text.nativeEvent.text)}}
        keyboardType='default'
        placeholder='digite seu numero'
        value={usuario}
        />

        <Button
        title='Click aqui'
        onPress={()=>{Alert.alert('Valor atual: ', usuario)}}
        />

        {/* <View
          onTouchStart={(event)=>{
            Alert.alert('CLIQUE', 'Clique Iniciado')
          }}
          onTouchEnd={(event)=>{
            Alert.alert('CLIQUE', 'Toque finalizado')
          }}
          onLayout={(event)=> {}}
        >
          <Text style={[styles.texto, styles.border]}>OnTouch</Text>
        </View> */}

        <Text
        selectable={true}
        onPress={()=>{console.log('pressionado')}}
        onLongPress={()=>{console.log('pressionamento longo')}}
        >
          Hello! Open up App.tsx to start working on your app!
        </Text>

        <StatusBar style="auto" />
        
        <Text>
          <Text>Ola</Text>
          <Text>Mundo</Text>
        </Text>

        <View>
          <Text>Ola</Text>
          <Text>Mundo</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff'
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
  },
  border: {
    borderColor: 'red',
    borderWidth: 3,
  }
});
