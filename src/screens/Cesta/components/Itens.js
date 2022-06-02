import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Texto from '../../../components/Texto'

export default function Itens({title, list}){
    return <>
        <Texto style={styles.title}>{ title }</Texto>
        { list.map(({name, image}) => {
            return <View style={styles.item} key={name}>
                    <Image source={image} style={styles.image}/>  
                    <Texto style={styles.name}>{ name }</Texto>
                </View>
        }) }
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item :{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16
    },
    image: {
        width: 46,
        height: 46
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})