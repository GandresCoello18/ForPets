import React from 'react';
import {Profile} from '../screens/profile';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScreenHome} from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottonNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={ScreenHome} options={{ 
                tabBarIcon: ({color}) => (
                    <TabBarIcon name="home" color={color} />
                ), headerShown: false }} 
            />
            <Tab.Screen name="Perfil" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                    <TabBarIcon name="user" color={color} />
                ),
          }} />
        </Tab.Navigator>
    )
}

function TabBarIcon({name, color}) {
    return (
      <Icon size={30} style={{marginBottom: -3}} name={name} color={color} />
    );
  }
  