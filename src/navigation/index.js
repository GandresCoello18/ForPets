import * as React from 'react';
import {LoginScreen} from '../screens/login';
import {WelcomeScreen} from '../screens/welcome';
import {UserContext} from '../context/user';
import {BottonNavigation} from './bottom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { me } = React.useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>

        {me  ? (
          <Stack.Screen name="Root" component={BottonNavigation} options={{ title: '', headerShown: false }}  />
        ) : (
          <>
            <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: '', headerShown: false }}  />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}