
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './components/RegistrationScreen';
import LoginScreen from './components/LoginScreen';
import CVFormScreen from './components/CvFormScreen';
import CVDisplayScreen from './components/CVDisplayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CVForm" component={CVFormScreen} />
        <Stack.Screen name="CVDisplay" component={CVDisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

