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
      >
        <Text>OnTouch</Text>
      </View>
      <Text>Hello!</Text>
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
