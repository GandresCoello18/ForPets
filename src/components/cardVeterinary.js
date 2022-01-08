import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR_PRIMARY_OPACITY, COLOR_PRIMARY} from '../utils/paleta';
import { View, Text, Image, StyleSheet } from 'react-native';

export const CardVeterinary = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.img} source={{uri: 'https://images.pexels.com/photos/6235047/pexels-photo-6235047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                    <View style={{marginLeft: 15}}>
                        <Text style={styles.title}>Drh. Kevin Julio</Text>
                        <Text style={{color: '#696969'}}>Veterunary Dentist</Text>

                        <View style={[styles.content, {marginTop: 10, justifyContent: 'space-around'}]}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.btnRight}>
                                    <FontAwesome style={styles.icon} name='dollar' />
                                </View>
                                <Text style={styles.textIcon}> 150</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.btnRight}>
                                    <Entypo style={[styles.icon, {paddingHorizontal: 2}]} name='location-pin' /> 
                                </View>
                                <Text style={styles.textIcon}>1.5km</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.btnRight}>
                <AntDesign name='arrowright' style={styles.ArrowIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        backgroundColor: COLOR_PRIMARY_OPACITY,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ArrowIcon: {padding: 10, fontSize: 20, color: '#fff'},
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    btnRight: {
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 30,
    },
    icon: {
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 2
    },
    textIcon: {
        fontWeight: '500',
        color: '#885031'
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 20,
    }
})