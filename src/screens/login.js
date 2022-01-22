import React, {useContext, useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLOR_PRIMARY } from '../utils/paleta';
import {UserContext} from '../context/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Button, SafeAreaView, TouchableOpacity, StatusBar, Text, StyleSheet } from 'react-native';

export const LoginScreen = ({navigation}) => {
    const [isSession, setIsSession] = useState(false);
    const { setMe } = useContext(UserContext);

    useEffect(() => {
        GoogleSignin.configure({
            androidClientId: '420739807008-7q272t5lms22c3r5n6a6lg4n55cdsiv1.apps.googleusercontent.com'
          });

          getStorage();
    }, [])

    const getStorage = async () => {
        if (await AsyncStorage.getItem('sesion')) {
            setIsSession(true);
        } else {
            setIsSession(false);
        }
    }

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();

          console.log(userInfo.user);

          await AsyncStorage.setItem('sesion', JSON.stringify(userInfo.user));
          setMe(userInfo.user);
          setIsSession(true);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

      const closeSesion = async () => {
        await GoogleSignin.signOut();
        await AsyncStorage.removeItem('sesion');
        getStorage();
      }

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar backgroundColor={COLOR_PRIMARY} />
            <TouchableOpacity style={{position: 'absolute', top: 5, left: 5}} onPress={() => navigation.goBack()}>
                <AntDesign style={{fontSize: 25}} name='arrowleft' />
            </TouchableOpacity>

            {!isSession ? <Button title='Inciar sesión con GOOGLE' onPress={signIn} /> : null}

            <Text />
            <Text />

            {isSession ? <Button title='Cerrar sesion' onPress={closeSesion} /> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});