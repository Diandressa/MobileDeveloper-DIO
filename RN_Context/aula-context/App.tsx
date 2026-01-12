import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserContextProvider from './src/contexts/userContext';

export type RootStackParamList = {
  Home: undefined;
  User: 
    {
      username:string
    }
}

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigator>

          <Screen name="Home" component={HomeScreen}/>
          <Screen name="User" component={UserScreen}/>

        </Navigator>
      </UserContextProvider>
    </NavigationContainer>
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
