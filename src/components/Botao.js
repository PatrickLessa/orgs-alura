import React from "react"
import { TouchableOpacity, StyleSheet } from 'react-native'
import Texto from "./Texto"

export default function Botao({text, alternativeStyle, onPress}){

    return <TouchableOpacity style={[styles.button, alternativeStyle]} onPress={onPress}>
        <Texto style={styles.textButton}>{ text }</Texto>
    </TouchableOpacity>
}

const styles = {
    button: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textButton: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
}