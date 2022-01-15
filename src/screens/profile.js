import React from 'react';
import {COLOR_PRIMARY} from '../utils/paleta';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View, Image, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar backgroundColor={COLOR_PRIMARY} />
            <View style={{padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign style={{fontSize: 25}} name='arrowleft' />
                </TouchableOpacity>

                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mi Perfil</Text>
                <Text />
            </View>

            <View style={{marginTop: 30, alignItems: 'center'}}>
                <Image style={styles.avatar} source={{uri: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                <Text style={styles.userName}>Andres Coello Goyes</Text>
                <Text>Goyeselcoca@gmail.com</Text>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userName: { fontSize: 18, textAlign: 'center', marginTop: 10, color: COLOR_PRIMARY },
    btn: {
        width: 200,
        backgroundColor: COLOR_PRIMARY,
        padding: 20,
        borderRadius: 30,
        marginTop: 40
    },
    textBtn: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
});
