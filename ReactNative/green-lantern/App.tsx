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
        <Text style={styles2.titleStyle}>Nicolau</Text>
        <Text style={styles2.titleStyle}>Aula React Native</Text>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  titleStyle: {
    fontSize:35,
    color: '#f1f1f1'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
