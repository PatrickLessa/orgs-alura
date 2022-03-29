import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta(){
    return <>
        <Image source={topo} style={style.topo} />
        <Text style={style.title}>Detalhe da cesta</Text>

        <View style={style.cesta}>
            <Text style={style.name}>Cesta de Verduras</Text>
            <View style={style.farm}>
                <Image style={style.farmImage} source={logo}/>
                <Text style={style.farmName}>Jenny Jack Farm</Text>
            </View>
            <Text style={style.description}>
                Uma cesta com pordutos selecionados cuidadosamente 
                da fazenda direto para sua cozinha
            </Text>
            <Text style={style.price}>R$ 40,00</Text>
        </View>
    </>
} 

const style = StyleSheet.create({
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
        fontFamily: "MontserratBold"
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
        marginLeft: 12,
        fontFamily: "MontserratRegular"   
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