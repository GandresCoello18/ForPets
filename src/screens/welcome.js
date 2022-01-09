import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

export const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.head}>
                    <Text style={styles.title}>Homey {'\n'}Pet</Text>
                    <Image style={styles.img} source={require('../assest/img/cat.png')} />
                </View>

                <View style={styles.description}>
                    <View style={styles.ovalado} />

                    <Text style={{ textAlign: "center", fontSize: 30, fontWeight: '500' }}>Take Care Of {'\n'}Your Pet</Text>
                
                    <Text style={styles.meta}>Make your bonding relationship between <Text style={{color: COLOR_PRIMARY, fontWeight: 'bold'}}>Pets & humans</Text></Text>
                
                    <TouchableOpacity style={styles.btnStar} onPress={() => navigation.navigate('home')}>
                        <AntDesign name='right' style={styles.circleIcon} />
                        <Text style={styles.textBtn}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY
    },
    ovalado: {
        width: width -220,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 200,
        position: 'absolute',
        top: -70,
        transform: [
            {scaleX: 3}
        ]
    },
    textBtn: {
        textAlign: "center",
        position: 'relative',
        left: -20, 
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },
    circleIcon: {
        backgroundColor: '#fff',
        borderRadius: 50,
        margin: 10,
        position: 'relative',
        fontSize: 20,
        padding: 20,
        left: -40
    },
    btnStar: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: "center",
        backgroundColor: COLOR_PRIMARY,
        paddingHorizontal: 40,
        borderRadius: 40
    },
    meta: {
        color: COLOR_SECONDARY,
        fontSize: 20,
        textAlign: "center",
        marginTop: 30
    },
    description: {
        padding: 40,
        height,
        alignItems: "center",
        backgroundColor: 'white',
        position: 'relative',
        top: 220
    },
    head: {
        padding: 25,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff'
    },
    img: {
        position: 'absolute',
        top: -120,
        left: 30
    }
})