import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import { Routes } from './src/routes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Routes/>
  );
}