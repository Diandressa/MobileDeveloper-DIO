import { StatusBar } from 'expo-status-bar';
import { Image, Alert, StyleSheet, Text, View } from 'react-native';
import imgChihiro from './assets/chihiro.png'

export default function App() {
  return (
    <View style={[styles.container, {backgroundColor: 'pink'}]}>

      <Image
      source={imgChihiro}
      />

      <View
        onTouchStart={(event)=>{
          Alert.alert('CLIQUE', 'Clique Iniciado')
        }}
        onTouchEnd={(event)=>{
          Alert.alert('CLIQUE', 'Toque finalizado')
        }}
        onLayout={(event)=> {}}
      >
        <Text style={[styles.texto, styles.border]}>OnTouch</Text>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
