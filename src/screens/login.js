import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLOR_PRIMARY } from '../utils/paleta';
import { Button, SafeAreaView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

export const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar backgroundColor={COLOR_PRIMARY} />
            <TouchableOpacity style={{position: 'absolute', top: 5, left: 5}} onPress={() => navigation.goBack()}>
                <AntDesign style={{fontSize: 25}} name='arrowleft' />
            </TouchableOpacity>

            <Button title='Inciar sesión con GOOGLE' />
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