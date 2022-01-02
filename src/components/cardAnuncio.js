import React from 'react';
import {COLOR_PRIMARY} from '../utils/paleta';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const CardAnuncio = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.cardText}>Join our Pet Lover {"\n"}Community</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', paddingVertical: 5, paddingHorizontal: 10}}>Join now</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', position: 'relative', left: -60}}>
                <Image style={[styles.img, {right: -50}]} source={require('../assest/img/dog-2.png')} />
                <Image style={[styles.img, {right: -15}]} source={require('../assest/img/cat.png')} />
                <Image style={styles.img} source={require('../assest/img/dog-1.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_PRIMARY,
        width: 320,
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 30,
        width: 80,
    },
    img: {
        width: 70,
        height: 90,
        position: 'relative',
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10
    }
})