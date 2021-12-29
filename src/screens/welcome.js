import React from "react";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../utils/paleta';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
const {height, width} = Dimensions.get('window');

export const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.head}>
                <Text style={styles.title}>Homey {'\n'}Pey</Text>
                <Image style={styles.img} source={require('../assest/img/cat.png')} />
            </View>

            <View style={styles.description}>
                <View style={styles.ovalado}></View>

                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: '500' }}>Take Care Of {'\n'}Your Pet</Text>
            
                <Text style={styles.meta}>Make your bonding relationship between <Text style={{color: COLOR_PRIMARY, fontWeight: 'bold'}}>Pets & humans</Text></Text>
            
                <TouchableOpacity style={styles.btnStar}>
                    <View style={styles.circleIcon}>
                        <Text style={{padding: 20}}>
                            {/*<MaterialIcons name='arrow-forward-ios' />*/}
                            rr
                        </Text>
                    </View>
                    <Text style={styles.textBtn}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY
    },
    ovalado: {
        width: width - 210,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 200,
        position: 'absolute',
        top: -70,
        transform: [
            {scaleX: 2}
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
        height: 50,
        margin: 10,
        position: 'relative',
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