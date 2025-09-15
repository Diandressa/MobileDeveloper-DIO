import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
      }}
    ></View>
  )
}

function CaixaBlue(){
  return(
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'blue',
      }}
    ></View>
  )
}

function CaixaGreen(){
  return(
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'green',
      }}
    ></View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderWidth: 5,
    borderColor: 'purple',
    backgroundColor: '#fff',
  },
});
