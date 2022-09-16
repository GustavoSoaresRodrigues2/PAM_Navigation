// Imports Geral
import React from "react";
import { View,Text,StyleSheet, TextInput } from "react-native";

export default function Registration() {
    
    
    return (
        <View>
            <Text style={styles.home}>Screen Registration !</Text>

            <Text style={styles.home}>Nome: </Text>
            <TextInput style={styles.inputes} placeholder="Insira seu Nome"></TextInput>
            
            <Text style={styles.home}>Nota 1: </Text>
            <TextInput style={styles.inputes} placeholder="Insira sua Nota 1"></TextInput>

            <Text style={styles.home}>Nota 2: </Text>
            <TextInput style={styles.inputes} placeholder="Insira sua Nota 2"></TextInput>

            <Text style={styles.home}>Nota 3: </Text>
            <TextInput style={styles.inputes} placeholder="Insira sua Nota 3"></TextInput>
                
            <Text style={styles.home}>Imagem: </Text>
            <TextInput style={styles.inputes} placeholder="Insira sua Imagem"></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        textAlign: "center",
        paddingTop: "20px",
        textTransform: "capitalize",
        textDecorationLine: "underline"
    },

    inputes: {
        borderColor: "#A9A9A9",
        borderWidth: "5px", borderStyle: "ridge",
        width: "350px",
        /* 
        display: "flex",
        alignItems: "center",
        justifyContent: "top",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        padding: "10px 10px 10px 10px",
        */
    }
})