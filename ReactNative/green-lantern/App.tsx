import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={{
          color: 'white', 
          backgroundColor: 'hotpink',
          fontSize: 30
        }}>
        Hello Andressa
      </Text>
      <View style={{backgroundColor: 'purple'}}>
        <Text style={{ color: 'red'}}>Nicolau</Text>
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
});
