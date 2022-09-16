// Imports Geral
import { View,Text, Button, StyleSheet } from "react-native";
import Registration from "../registration";
import React, { useEffect, useState } from "react";
import firebase from "../firebaseConnection"

export default function Home() {

    const [nome,setNome] = useState("");
    const [nota1,setNota1] = useState("");
    const [nota2,setNota2] = useState("");
    const [nota3,setNota3] = useState("");

    useEffect(()=>{
        async function buscarAluno(){
            await firebase.database().ref("aluno/1").on("value", (snapshot) => {
                setNome(snapshot.val().nome);
                setNota1(snapshot.val().nota1);
                setNota2(snapshot.val().nota2);
                setNota3(snapshot.val().nota3);
            })
        }

        buscarAluno();
    })

    return (
        <View>
            <Text style={styles.home}>Screen home !</Text>
            <Text style={styles.home}>Nome: {nome}</Text>
            <Text style={styles.home}>Nota 1: {nota1}</Text>
            <Text style={styles.home}>Nota 2: {nota2}</Text>
            <Text style={styles.home}>Nota 3: {nota3}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        textAlign: "center",
        paddingTop: "20px",
        textTransform: "capitalize",
        textDecorationLine: "underline"
    }
})