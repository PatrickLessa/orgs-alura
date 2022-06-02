import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

import Texto from '../../../components/Texto'
import Botao from '../../../components/Botao'

export default function Detalhes({name, farmImage, farmName, description, price, botao}){
    return <>
            <Texto style={styles.name}>{ name }</Texto>
            <View style={styles.farm}>
                <Image style={styles.farmImage} source={ farmImage }/>
                <Texto style={styles.farmName}>{ farmName }</Texto>
            </View>
            <Texto style={styles.description}>{ description }</Texto>
            <Texto style={styles.price}>{ price }</Texto>

            <Botao text={botao} alternativeStyle={styles.button}/>
        </>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },  
    farmImage: {
        width: 32,
        height: 32
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    button: {
        marginTop: 16
    }
})