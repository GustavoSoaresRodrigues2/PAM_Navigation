// Imports Geral
import { View,Text, Button, StyleSheet, FlatList } from "react-native";
import Registration from "../registration";
import React, { useEffect, useState } from "react";
import firebase from "../firebaseConnection"
import CardAlunos from "../../components/cardsAluno";

export default function Home() {

    const [alunos,setAlunos] = useState([]);

    
    useEffect(()=>{
        async function buscarAluno(){
            await firebase.database().ref("aluno").on("value", (snapshot) => {
                
                
                setAlunos([]);
                snapshot.forEach( (childItem) => {
                    
                    
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome,
                        nota1: childItem.val().nota1,
                        nota2: childItem.val().nota2,
                        nota3: childItem.val().nota3,
                        imagem: childItem.val().imagem
                    }
                    
                    setAlunos(alunos => [...alunos, data]);
                })

            })
        }

        buscarAluno();
    },[])

    return (
        <View style={styles.container}>
            <Text>Lista de Alunos</Text>
            <FlatList
                data = {alunos}
                numColumns = {2}
                keyExtractor = {(item) => item.key}
                renderItem = {(({item}) => <CardAlunos data={item}></CardAlunos>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: "20px",
        textTransform: "capitalize",
        alignItems: "center"
    }
})