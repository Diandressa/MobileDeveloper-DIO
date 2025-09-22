import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { helloAndressa } from './src/actions'

export default function App() {
  async function handlerHello(){
    console.log("Hello handler function")
  }

  async function handlerPress(id:number){
    console.log("pressionar", id)
  }
  return (
    <View style={styles.container}>

      <Text 
      style={{ fontSize:32 }} 
      onPressOut={ ()=> console.log("Press out acionado") }
      onPressIn={ ()=> console.log("Press in acionado") }
      onPress={ ()=> console.log("pressionado") }
      onLongPress={ ()=> console.log("longPress acionado")} 
      onTextLayout={ ()=> console.log("Texto no Layout")} 
      >
        Componente 
      </Text>

      {/* <Text onPress={()=> console.log('inline')}>Inline</Text>
      <Text onPress={handlerHello}>Handler Function</Text>
      
      <Text onPress={() => handlerPress(2)}>
        Handler Function with Parameters
      </Text>

      <Text onPress={helloAndressa}>
        Another File
      </Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
