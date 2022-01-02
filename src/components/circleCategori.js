import React from 'react';
import {COLOR_PRIMARY} from '../utils/paleta';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet } from 'react-native';

export const CicleCategory = ({title, icon, isActive}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.circle, isActive ? { backgroundColor: COLOR_PRIMARY} : { backgroundColor: '#cdcdcd'}]}>
                <AntDesign style={{padding: 20, fontSize: 25}} name={icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center',
        height: 110,
    },
    title: {
        textAlign: 'center',
        fontWeight: '500'
    },
    circle: {
        borderRadius: 50,
        marginBottom: 10
    }
})