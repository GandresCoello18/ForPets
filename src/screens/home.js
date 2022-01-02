import React from 'react';
import {COLOR_SECONDARY} from '../utils/paleta';
import {CardAnuncio} from '../components/cardAnuncio';
import {CicleCategory} from '../components/circleCategori';
import { Text, SafeAreaView, ScrollView, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const dataCategory = [
    {
        id: "1",
        icon: "exclamationcircle",
        title: "Veterinary",
        isActive: true,
    },
    {
        id: "2",
        icon: "closecircle",
        title: "Grooming",
        isActive: false,
    },
    {
        id: "3",
        icon: "checkcircleo",
        title: "Accesorios",
        isActive: false,
    },
    {
        id: "4",
        icon: "barschart",
        title: "Foods",
        isActive: false,
    },
    {
        id: "5",
        icon: "creditcard",
        title: "Trainir",
        isActive: false,
    },
]

export const ScreenHome = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.head}>
                    <View>
                        <Text style={styles.name}>Hi Andres Coello</Text>
                        <Text style={{ fontSize: 17, color: COLOR_SECONDARY}}>Good Morning!</Text>
                    </View>
                    <Image style={styles.avatar} source={{uri: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='}} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <CardAnuncio />
                </View>

                <View>
                    <View style={styles.sectionHeadCategoria}>
                        <Text style={styles.titleCategori}>Category</Text>
                        <Text style={{color: COLOR_SECONDARY}}>Sell all</Text>
                    </View>
                    <FlatList 
                        data={dataCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id}>
                                <CicleCategory {...item} />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'rgb(235,235,235)',
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    titleCategori: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    sectionHeadCategoria: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
    }
})