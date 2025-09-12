import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        onTouchStart={(event)=>{
          Alert.alert('CLIQUE', 'Clique Iniciado')
        }}
        onTouchEnd={(event)=>{
          Alert.alert('CLIQUE', 'Toque finalizado')
        }}
        onLayout={(event)=> {}}
      >
        <Text style={styles.texto}>OnTouch</Text>
      </View>

      <Text
      selectable={true}
      >
        Hello! Open up App.tsx to start working on your app!
      </Text>

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
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
  }
});
