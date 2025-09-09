
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection: 'column',
      borderColor: '#f3f3f3',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    overlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.37)"
    },
    inputContainer: {
      width: '80%',
      alignItems: 'center',
      flexDirection: 'column',
    }

  });

export default styles;