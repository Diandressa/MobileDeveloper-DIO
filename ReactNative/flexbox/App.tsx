import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return(
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'red',
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
        flexGrow: 1
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
        flexGrow: 1
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderWidth: 5,
    borderColor: 'purple',
    backgroundColor: '#fff',
  },
});
