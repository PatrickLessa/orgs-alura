import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Texto from '../components/Texto'

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta(){
    return <>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.title}>Detalhe da cesta</Texto>

        <View style={styles.cesta}>
            <Texto style={styles.name}>Cesta de Verduras</Texto>
            <View style={styles.farm}>
                <Image style={styles.farmImage} source={logo}/>
                <Texto style={styles.farmName}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={styles.description}>
                Uma cesta com pordutos selecionados cuidadosamente 
                da fazenda direto para sua cozinha
            </Texto>
            <Texto style={styles.price}>R$ 40,00</Texto>
        </View>
    </>
} 

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
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
    }
})