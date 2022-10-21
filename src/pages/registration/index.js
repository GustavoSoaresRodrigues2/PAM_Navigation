// Imports Geral
import React, {useState} from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
import firebase from '../firebaseConnection'

export default function Registration() {
    
    const [nome,setNome] = useState("");
    const [nota1,setNota1] = useState("");
    const [nota2,setNota2] = useState("");
    const [nota3,setNota3] = useState("");
    const [imagem,setImagem] = useState("");

    async function Cadastrar (){
        
        const Alunos = await firebase.database().ref('aluno');
        const chave = Alunos.push().key;

        Alunos.child(chave).set({

            nome: nome,
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            imagem: imagem

        })

        setNome("")
        setNota1("")
        setNota2("")
        setNota3("")
        setImagem("")
    }

    return (

        <View style={styles.cadastro}>
            <Text style={styles.home}>Screen Registration !</Text>

            <Text style={styles.home}>Nome: </Text>
            <TextInput value={nome} style={styles.inputes} placeholder="Insira seu Nome" onChangeText={(texto)=> setNome(texto)} ></TextInput>
            
            <Text style={styles.home}>Nota 1: </Text>
            <TextInput value={nota1} style={styles.inputes} placeholder="Insira sua Nota 1" onChangeText={(texto)=> setNota1(texto)} ></TextInput>

            <Text style={styles.home}>Nota 2: </Text>
            <TextInput value={nota2} style={styles.inputes} placeholder="Insira sua Nota 2" onChangeText={(texto)=> setNota2(texto)} ></TextInput>

            <Text style={styles.home}>Nota 3: </Text>
            <TextInput value={nota3} style={styles.inputes} placeholder="Insira sua Nota 3" onChangeText={(texto)=> setNota3(texto)} ></TextInput>
                
            <Text style={styles.home}>Imagem: </Text>
            <TextInput value={imagem} style={styles.inputes} placeholder="Insira sua Imagem" onChangeText={(texto)=> setImagem(texto)} ></TextInput>

            <TouchableOpacity>
                <Text style={styles.botao} onPress={Cadastrar}>Cadastrar</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cadastro: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    home: {
        textAlign: "center",
        paddingTop: "20px",
        textTransform: "capitalize",
        textDecorationLine: "underline"
    },
    
    inputes: {
        borderColor: "#A9A9A9",
        borderWidth: "5px",
        borderStyle: "ridge",
        width: "350px",
    },

    botao: {
        borderColor: "#A9A9A9",
        borderWidth: "5px",
        borderStyle: "ridge",
        marginTop: 15
    }
})