import * as React from 'react';
import { View, Text } from 'react-native';
import {WelcomeScreen} from '../screens/welcome';
import {ScreenHome} from '../screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={ScreenHome} options={{ title: '' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}