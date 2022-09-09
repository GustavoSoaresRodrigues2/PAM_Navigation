// Imports Geral
import { View,Text, Button } from "react-native";
import Details from "../details";
import React, { useEffect, useState } from "react";
import firebase from "../firebaseConnection"

export default function Home() {

    const [nome,SetNome] = useState("");
    useEffect(()=>{
        async function buscarDados(){
            await firebase.database().ref("aluno/1/nome").on("value", (snapshot) => {
                SetNome(snapshot.val());
            })
        }

        buscarDados();
    },[])


    return (
        <View>
            <Text>Screen Home !</Text>
            <Text>{nome}</Text>
        </View>
    );
}
