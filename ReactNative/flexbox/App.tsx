import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'red'
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
        backgroundColor: 'blue'
      }}
    ></View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
